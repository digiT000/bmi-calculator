import "./App.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import MetricForm from "./components/MetricForm/MetricForm";
import BenefitItem from "./components/BenefitItem/BenefitItem";
import LimitationItem from "./components/LimitationItem/LimitationItem";
import { dataLimitation } from "./models/data";
import { cardItemProps } from "./models/interface";
import AOS from "aos";
function App() {
  const [metricType, setMetricType] = useState<"metric" | "imperial">("metric");

  function handleChangeType(e: any) {
    setMetricType(e.target.value);
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="heroSection" className="heroSection">
        <div className="bg-gradient"></div>
        <div className="container">
          <header className="headerLogo">
            <img src="/logo.svg" alt="logo" />
          </header>

          <div className="heroGrid">
            <div
              className="heroContent"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="heading-xl">Body Mass Index Calculator</h1>
              <p className="body-text">
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>
            <div
              className="metricCalculator"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="heading-md">Enter your details below</h3>
              <div className="metricSelection">
                <div className="inputRadioMetric">
                  <input
                    type="radio"
                    name="metric"
                    id="metric"
                    value="metric"
                    checked={metricType === "metric"}
                    onChange={handleChangeType}
                  />
                  <label className="labelRadio" htmlFor="metric">
                    Metric
                  </label>
                </div>
                <div className="inputRadioMetric">
                  <input
                    type="radio"
                    name="metric"
                    id="imperial"
                    value="imperial"
                    checked={metricType === "imperial"}
                    onChange={handleChangeType}
                  />
                  <label className="labelRadio" htmlFor="imperial">
                    Imperial
                  </label>
                </div>
              </div>
              <MetricForm formTypes={metricType} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION WHAT IS BMI */}
      <section className="sectionWhatIsBMI">
        <div className="container innerWhatIsBmi">
          <div className="imageContainer">
            <img
              src="/image-man-eating.webp"
              alt="Image man eating healthy"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
          <div className="bmiContent" data-aos="fade-up" data-aos-delay="300">
            <h2 className="heading-lg">What your BMI result means</h2>
            <p className="body-text">
              {`A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.`}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION BENEFIT */}
      <section className="sectionBenefit">
        <div className="container innerBenefit">
          <BenefitItem
            key={1}
            image="/icon-eating.svg"
            title="Healthy eating"
            description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
            setAosDelay="200"
          />
          <BenefitItem
            key={2}
            image="/icon-exercise.svg"
            title="Regular exercise"
            description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
            setAosDelay="250"
          />
          <BenefitItem
            key={3}
            image="/icon-sleep.svg"
            title="Adequate sleep"
            description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
            setAosDelay="300"
          />
        </div>
      </section>

      {/* SECTION LIMITATION */}
      <section className="sectionLimitation">
        <div className="container innerLimitation">
          <div className="limitationContent">
            <h2 className="heading-lg">Limitations of BMI</h2>
            <p className="body-text">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="gridLimitation">
            {dataLimitation.map((data: cardItemProps, i: number) => {
              // Add delay toaos animation based on index
              const delay = i * 50;
              return (
                <LimitationItem
                  key={i}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  setAosDelay={delay.toString()}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
