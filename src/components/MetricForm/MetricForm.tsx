import "./style.css";
import { ResultProps } from "../../models/interface";
import { useState } from "react";
import MetricResult from "../MetricResult/MetricResult";

interface MetricFormProps {
  formTypes: "metric" | "imperial";
}

function MetricForm({ formTypes = "metric" }: MetricFormProps) {
  const [result, setResult] = useState<ResultProps>({
    bmi: 0,
    weight: 0,
    height: 0,
  });

  let metricType; // To store the jsx in variable

  switch (formTypes) {
    case "metric":
      metricType = (
        <div className="formMetric">
          <div>
            <label className="label-field" htmlFor="height">
              Height
            </label>
            <div className="inputWrapper">
              <input className="inputField" type="number" />
              <span className="customText">cm</span>
            </div>
          </div>
          <div>
            <label className="label-field" htmlFor="height">
              Weight
            </label>
            <div className="inputWrapper">
              <input className="inputField" type="number" />
              <span className="customText">kg</span>
            </div>
          </div>
        </div>
      );
      break;

    case "imperial":
      metricType = (
        <div className="formMetric">
          <div>
            <label className="label-field" htmlFor="height">
              Height
            </label>
            <div className="innerWrapper">
              <div className="inputWrapper">
                <input className="inputField" type="number" />
                <span className="customText">ft</span>
              </div>
              <div className="inputWrapper">
                <input className="inputField" type="number" />
                <span className="customText">in</span>
              </div>
            </div>
          </div>
          <div>
            <label className="label-field" htmlFor="height">
              Weight
            </label>
            <div className="innerWrapper">
              <div className="inputWrapper">
                <input className="inputField" type="number" />
                <span className="customText">st</span>
              </div>
              <div className="inputWrapper">
                <input className="inputField" type="number" />
                <span className="customText">lbs</span>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    default:
      metricType = <p>Something went wrong`</p>;
  }

  return (
    <>
      {metricType}
      <MetricResult bmi={result.bmi} />
    </>
  );
}

export default MetricForm;
