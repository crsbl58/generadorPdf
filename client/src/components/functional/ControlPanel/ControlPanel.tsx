import { useEffect, useState } from "react";
import styles from "./ControlPanel.module.scss";
import { config } from "../../../utils/config";

import { useStore, useImage } from "../../../store/hooks/index";

import { Container, Row, Col } from "@/components/layout/generic";
import SliderImage from "@/components/ui/SliderImage/SliderImage";
import ImageThumbnail from "@/components/ui/ImageThumbnail/ImageThumbnail";
import UploadImage from "@/components/ui/UploadImage/UploadImage";
import ButtonIcon from "@/components/ui/ButtonIcon/ButtonIcon";
import { LoadingMessage } from "@/components/ui/LoadingMessage";

const ControlPanel = () => {
  const [stateSlider, setStateSlider] = useState(false);

  const [stateImg, setStateImg] = useState<any>([]);
  const { storeList, getAll } = useStore();
  const [statelightUpdate, setStatelightUpdate] = useState(false);

  const { upload, loadImage, updateImage, listImage, imageLoading } =
    useImage();

  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleDragStart = (event: any, index: number) => {
    event.dataTransfer.setData("index", index);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any, targetIndex: any) => {
    const sourceIndex = event.dataTransfer.getData("index");
    const newImages = [...stateImg];
    const [movedImage] = newImages.splice(sourceIndex, 1);
    newImages.splice(targetIndex, 0, movedImage);
    setStateImg(newImages);
    setStatelightUpdate(true);
  };

  const handleImageThumbnailOnclick = (mapItemId: any) => {
    setStateImg([
      ...stateImg.filter((filterItem: any) => filterItem.id !== mapItemId),
    ]);
    setStatelightUpdate(true);
  };

  const handleUpdateOnclick = () => {
    let mapStateItems: any = stateImg.map((mapItem: any) => {
      return { id: mapItem.id, name: mapItem.name };
    });
    updateImage(mapStateItems);
    setStateImg([]);
    setStatelightUpdate(false);
  };

  useEffect(() => {
    if (listImage.length > 0) {
      setStatelightUpdate(false);
      setStateImg(
        listImage.map((mapItem: any) => {
          return {
            id: mapItem.id,
            name: mapItem.name,
            imgUrl: config.server + "/" + mapItem.name,
          };
        })
      );
    }
  }, [listImage]);

  useEffect(() => {
    loadImage();
    getAll();
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      upload(formData);
      setSelectedImage(null);
    }
  }, [selectedImage]);

  return (
    <Container className={styles.Container} type="flex" padding={[5, 5, 5, 5]}>
      <Row gap={5} widthText="100%">
        <Col
          padding={[5, 0, 0, 0]}
          className={styles.colContainerImageThumbnail}
          widthText="17%"
          alignItems="center"
          heightText="92vh"
          gap={10}
        >
          <Col
            className={styles.colImageThumbnail}
            widthText="90%"
            heightText="90%"
            gap={10}
            padding={[10, 10, 10, 10]}
          >
            {stateImg.map((mapItem: any, index: number) => {
              return (
                <div key={index}>
                  <ImageThumbnail
                    onDragStart={(event: any) => handleDragStart(event, index)}
                    onDragOver={handleDragOver}
                    onDrop={(event: any) => handleDrop(event, index)}
                    onClick={() => {
                      handleImageThumbnailOnclick(mapItem.id);
                    }}
                    imgUrl={mapItem.imgUrl}
                  />
                </div>
              );
            })}
          </Col>

          <Row
            justifyContent="center"
            alignItems="center"
            padding={[5, 0, 5, 0]}
            widthText="100%"
            backgroundColor="#3d6868"
            gap={5}
          >
            <UploadImage
              icon="add"
              onChange={async (e: any) => {
                if (stateImg.length < 15) {
                  setSelectedImage(e.target.files[0]);
                }
              }}
            />
            <ButtonIcon
              icon="play_arrow"
              onClick={() => {
                setStateSlider(true);
              }}
            />
            <ButtonIcon
              shadowLight={statelightUpdate}
              icon="cloud_upload"
              onClick={() => {
                handleUpdateOnclick();
              }}
            />
          </Row>
        </Col>

        <Col
          padding={[15, 10, 15, 10]}
          className={styles.colContainerSliderImage}
          justifyContent="center"
          alignItems="center"
          widthText="65%"
          heightText="92vh"
        >
          <Col className={styles.colSliderImage}>
            <SliderImage
              arrayImage={stateImg}
              state={[stateSlider, setStateSlider]}
            />
          </Col>
        </Col>

        <Col
          padding={[10, 0, 10, 0]}
          className={styles.colMenu}
          widthText="17%"
          alignItems="center"
          heightText="92vh"
        >
          <Col
            padding={[10, 10, 10, 10]}
            widthText="90%"
            heightText="90%"
            className={styles.colContainerMenu}
            gap={5}
          >
            {storeList.map((item: any, index: number) => (
              <h3 className={styles.h3Menu} key={index}>
                {item.name}
              </h3>
            ))}
          </Col>
        </Col>
      </Row>
      <LoadingMessage showModal={imageLoading} />
    </Container>
  );
};

export default ControlPanel;
