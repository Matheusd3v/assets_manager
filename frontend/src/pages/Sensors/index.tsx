import { useEffect, useState } from "react";
import { DefaultContainerPageStyle } from "../../style/DefaultContainerPageStyle";
import { Chart } from "../../components/Chart";
import { useParams } from "react-router";
import { api } from "../../services/api";
import { ICollection } from "../../types";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { CollectionForm } from "../../components/CollectionForm";
import { Line } from "../../components/Line";
import { SensorContainer } from "./style";

export const SensorPage = () => {
  const [collectionList, setCollectionList] = useState<ICollection[]>([]);
  const { id, sensorId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const apiUrlCollection = `/assets/${id}/sensors/${sensorId}`;
  const deleteUrl = (date: string) => apiUrlCollection.concat(`?date=${date}`);

  const deleteCollection = (date: string) => {
    api.delete(deleteUrl(date)).then(() => getCollections());
  };
  const getCollections = () => {
    api
      .get(`/assets/${id}/sensors/${sensorId}`)
      .then((response) => setCollectionList(response.data.collections));
  };

  useEffect(() => {
    getCollections();
  }, []);

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <DefaultContainerPageStyle>
      <header className="page-header">
        <h2>Coletas</h2>

        <Button size="medium" onClick={() => setIsOpen(true)}>
          Cadastrar Coleta
        </Button>
      </header>

      {isOpen && (
        <Modal callback={getCollections} setIsOpen={setIsOpen}>
          <CollectionForm url={apiUrlCollection} />
        </Modal>
      )}

      <SensorContainer className="container">
        <div className="list-container">
          <Line hiddenBtn={true}>
            <p>Id</p>
            <p>Valor</p>
            <p>Data</p>
          </Line>

          {collectionList.length > 0 &&
            collectionList.map((collection) => (
              <Line callback={() => deleteCollection(collection.date)}>
                <p>{collection.id}</p>
                <p>{collection.value}</p>
                <p>
                  {new Date(collection.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  })}
                </p>
              </Line>
            ))}
        </div>

        <div className="chart-container">
          <Chart collections={collectionList} />
        </div>
      </SensorContainer>
    </DefaultContainerPageStyle>
  );
};
