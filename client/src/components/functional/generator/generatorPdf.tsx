import styles from "./Generator.module.scss";
import { useState } from "react";

import { useGenerator } from "../../../store/hooks/index";

import Input from "@/components/ui/Input/Input";

const GeneratorPdf = () => {
  const { generatePdf } = useGenerator();

  const [statePdf, setStatePdf] = useState({
    ownerName: "Cristobal",
    address: "san vicente",
    phone: "546545",
    identifierNumber: "macho",
    petName: "pelusa",
    breed: "quiltro",
    species: "perro",
    birthDate: "20/06/2023",
    weight: 12.5,
  });

  const changeInputs = (e: any) => {
    setStatePdf({
      ...statePdf,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className={styles.containerPdf}>
      <h1>Ficha mascota</h1>
      <div className={styles.containerTablaPdf}>
        <div>
          <div className={styles.groupBox}>
            <h3>N. propietario</h3>
            <Input
              name="ownerName"
              onChange={changeInputs}
              value={statePdf.ownerName}
            />
          </div>
          <div className={styles.groupBox}>
            <h3>Dirección</h3>
            <Input
              name="address"
              onChange={changeInputs}
              value={statePdf.address}
            />
          </div>
          <div className={styles.groupBox}>
            <h3>Teléfono</h3>
            <Input
              name="phone"
              onChange={changeInputs}
              value={statePdf.phone}
            />
          </div>
        </div>
        <div>
          <div className={styles.groupBox}>
            <h3>N° identificación</h3>
            <Input
              type="number"
              name="identifierNumber"
              onChange={changeInputs}
              value={statePdf.identifierNumber}
            />
          </div>
          <div className={styles.groupBox}>
            <h3>N. Mascota</h3>
            <Input
              name="petName"
              onChange={changeInputs}
              value={statePdf.petName}
            />
          </div>
          <div className={styles.groupBox}>
            <h3>Raza</h3>
            <Input
              name="breed"
              onChange={changeInputs}
              value={statePdf.breed}
            />
          </div>
        </div>
        <div>
          <div className={styles.groupBox}>
            <h3>Especie</h3>
            <Input
              name="species"
              onChange={changeInputs}
              value={statePdf.species}
            />
          </div>
          <div className={styles.groupBox}>
            <h3>F. nacimiento</h3>
            <Input
              type="date"
              name="birthDate"
              onChange={changeInputs}
              value={statePdf.birthDate}
            />
          </div>
          <div className={styles.groupBox}>
            <h3>Peso</h3>
            <Input
              type="number"
              name="weight"
              onChange={changeInputs}
              value={statePdf.weight}
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          generatePdf(statePdf);
        }}
      >
        Generar Pdf
      </button>
    </div>
  );
};

export default GeneratorPdf;
