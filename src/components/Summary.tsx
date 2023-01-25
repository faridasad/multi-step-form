type SummaryProps = {
  title: string;
  addons: string[];
  billing: string;
  plan: string;
  total: number;
  isSubmitted: boolean;
  move: (index: number) => void;
};

import { fakeAddOns, fakePlans } from "../db/FakeData";
import Thank from "./Thank";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Summary({
  title,
  addons,
  billing,
  plan,
  total,
  isSubmitted,
  move
}: SummaryProps) {
  return (
    <div className="wrapper">
      {isSubmitted ? (
        <Thank />
      ) : (
        <>
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming</p>
          <div className="summary-container">
            <div className="plan">
              <div>
                <h3>{`${capitalizeFirstLetter(plan)} ${
                  billing === "monthly" ? " (Monthly)" : " (Yearly)"
                }`}</h3>
                <p className="change-text" onClick={() => move(1)}>Change</p>
              </div>
              <p className="plan-cost">
                {billing === "monthly"
                  ? `$${
                      fakePlans.find((f) => f.name === plan)?.price.monthly
                    }/mo`
                  : `$${
                      fakePlans.find((f) => f.name === plan)?.price.yearly
                    }/yr`}
              </p>
            </div>

            <div className="br"></div>

            <div className="addons">
              {addons.map((a, i) => (
                <div className="addon-item" key={i}>
                  <p className="addon-title">
                    {fakeAddOns.find((f) => f.name === a)?.title}
                  </p>
                  <>
                    {billing === "monthly" ? (
                      <p className="addon-cost">
                        +${fakeAddOns.find((f) => f.name === a)?.price.monthly}
                        /mo
                      </p>
                    ) : (
                      <p className="addon-cost">
                        +${fakeAddOns.find((f) => f.name === a)?.price.yearly}
                        /yr
                      </p>
                    )}
                  </>
                </div>
              ))}
            </div>
          </div>
          <div className="total-cost-container">
            <p>Total (per {billing === "monthly" ? "month" : "year"})</p>
            <p className="total-cost">
              {billing === "monthly" ? `+$${total}/mo` : `+$${total}/yr`}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Summary;
