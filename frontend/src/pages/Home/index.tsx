import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { IAsset } from "../../types";
import { DefaultContainerPageStyle } from "../../style/DefaultContainerPageStyle";
import { ROUTES } from "../../routes/constants";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { EntityForm } from "../../components/EntityForm";

export const HomePage = () => {
  const [assetsList, setAssetsList] = useState<IAsset[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const nextPath = (id: number) => {
    return ROUTES.asset.list.path.replace("/:id", `/${id}`);
  };
  const apiUrlRegisterAssets = "/assets";

  const getAssets = () => {
    api
      .get("/assets")
      .then((response) => {
        setAssetsList(
          response.data.assets.map((asset: IAsset) => {
            asset.totalRelation = asset.totalSensors;
            return asset;
          })
        );
      })
  };

  const deleteCard = (id: number) => {
    api.delete(`/assets/${id}`).then(() => {
      getAssets();
    });
  };

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <DefaultContainerPageStyle>
      <header className="page-header">
        <h2>Ativos</h2>

        <Button onClick={() => setIsOpen(true)}>Cadastrar Ativo</Button>
      </header>

      {isOpen && (
        <Modal callback={getAssets} setIsOpen={setIsOpen}>
          <EntityForm url={apiUrlRegisterAssets} />
        </Modal>
      )}

      {assetsList.length > 0 ? (
        assetsList.map((asset) => (
          <Card
            entity={asset}
            path={nextPath(asset.id)}
            key={asset.id}
            callback={() => deleteCard(asset.id)}
            descriptionType="sensor"
          />
        ))
      ) : (
        <p className="empty-message">Sem registros por aqui...</p>
      )}
    </DefaultContainerPageStyle>
  );
};
