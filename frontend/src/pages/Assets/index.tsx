import { useParams } from "react-router";
import { DefaultContainerPageStyle } from "../../style/DefaultContainerPageStyle";
import { useEffect, useState } from "react";
import { ISensor } from "../../types";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { ROUTES } from "../../routes/constants";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { EntityForm } from "../../components/EntityForm";

export const AssetPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sensorList, setSensorLit] = useState<ISensor[]>([]);
  const { id } = useParams();
  const apiUrlRegisterSensors = `assets/${id}/sensors`;
  const nextPath = (sensorId: number) => {
    const basePath = ROUTES.sensor.list.path;
    return basePath
      .replace("/:id", `/${id}`)
      .replace("/:sensorId", `/${sensorId}`);
  };

  const getSensors = () => {
    api.get(`/assets/${id}/sensors`).then((response) => {
      setSensorLit(
        response.data.sensors.map((sensor: ISensor) => {
          sensor.totalRelation = sensor.totalCollections;
          return sensor;
        })
      );
    });
  };

  const deleteCard = (assetId: number, sensorId: number) => {
    api.delete(`/assets/${assetId}/sensors/${sensorId}`).then(() => {
      getSensors();
    });
  };

  useEffect(() => {
    getSensors();
  }, []);

  return (
    <DefaultContainerPageStyle>
      <header className="page-header">
        <h2>Sensores</h2>

        <Button size="medium" onClick={() => setIsOpen(true)}>
          Cadastrar Sensor
        </Button>
      </header>

      {isOpen && (
        <Modal callback={getSensors} setIsOpen={setIsOpen}>
          <EntityForm url={apiUrlRegisterSensors} />
        </Modal>
      )}

      {sensorList.length > 0 ? (
        sensorList.map((sensor) => (
          <Card
            callback={() => deleteCard(id as unknown as number, sensor.id)}
            descriptionType="collection"
            entity={sensor}
            key={sensor.id}
            path={nextPath(sensor.id)}
          />
        ))
      ) : (
        <p className="empty-message">Sem registros por aqui...</p>
      )}
    </DefaultContainerPageStyle>
  );
};
