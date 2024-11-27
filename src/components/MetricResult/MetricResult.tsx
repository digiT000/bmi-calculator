import "./style.css";
import { ResultProps } from "../../models/interface";

function MetricResult({ bmi }: ResultProps) {
  return (
    <section className="metricResult">
      {bmi === 0 ? (
        <div className="emptyResult">
          <h3 className="heading-md text-white">Welcome!</h3>
          <p className="body-text text-white">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default MetricResult;
