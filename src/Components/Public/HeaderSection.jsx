import { styles } from "../../Styles/mixins";

function HeaderSection({ headTitle, SubText }) {
  return (
    <>
      <div className=" mb-6 w-full pt-5">
        <h2 className={`${styles.mainSectionHeadText}`}>{headTitle}</h2>
        <p className={`${styles.mainSectionSubText} w-full break-words`}>
          {SubText}
        </p>
      </div>
    </>
  );
}

export default HeaderSection;
