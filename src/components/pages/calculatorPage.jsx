import Calculator from '../Calculator';

const CalculatorPage = () => (
  <section className="calculator-main-section">
    <div className="bg" />
    <div className="calculator-main-wrapper">
      <div className="calculator-container flex-between">
        <div className="right-container">
          <p>
            Let do some Math
            <span>!</span>
          </p>
        </div>
        <div className="left-container">
          <Calculator />
        </div>
      </div>
    </div>
  </section>
);

export default CalculatorPage;
