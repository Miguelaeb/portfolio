import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="mt-20" >
      <h2>
        {t('aboutTitle')}
      </h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:mt-10">
        <div className="max-w-[150px] mx-auto flex justify-center items-center mt-10 lg:mt-0 xl:max-w-[200px]">
          <img src="./images/avatar2.png" alt="avatar-1" className="w-full" />
        </div>

        <div className="lg:text-left lg:w-3/5">
          <p className="mt-12 font-SourceSansPros lg:mt-0 lg:text-base dark:text-white">
            {t('aboutDescription1')}
          </p>

          <p className="mt-6 font-SourceSansPro lg:text-base dark:text-white">
            {t('aboutDescription2')}
          </p>
        </div>
      </div>

      <div id="technologies"></div>
    </section>
  );
}
