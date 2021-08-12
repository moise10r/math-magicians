import propTypes from 'prop-types';

const Result = ({ value, onChange }) => (
  <div className="row flex-center result">
    <input type="text" value={value} onChange={onChange} disabled />
  </div>
);

Result.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Result;
