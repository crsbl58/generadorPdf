import Image from "next/image";
import styles from "./ModalLoading.module.scss";

import loadingSvg from "../../../../public/svg/loading.svg";

const ModalLoading = ({ show }: any) => {
  return show ? (
    <div className={styles.ModalLoading}>
      <div>
        <Image height={50} width={50} src={loadingSvg} alt={"excel"} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ModalLoading;
