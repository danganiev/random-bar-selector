import React, { Dispatch, useState } from "react";
import axios from "axios";
import "../App.css";

const cities_ = ["Kazan", "New York", "Kaluga"];

type SearchFormProps = {
  setBar: Dispatch<any>;
};

const SearchForm = ({ setBar }: SearchFormProps): JSX.Element => {
  const [isCityError, setIsCityError] = useState(false);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState(cities_);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const validate = (): boolean => {
    if (city === "") {
      setIsCityError(true);
      return false;
    }
    return true;
  };

  const submit = async (): Promise<void> => {
    setIsButtonDisabled(true);
    const result = await axios.post("/choose", { city });
    // console.log(result);
    setBar(result.data);
    setIsButtonDisabled(false);
  };

  return (
    <form
      role="search"
      name="search form"
      onSubmit={(e) => {
        e.preventDefault();
        const validateResult = validate();
        if (validateResult) {
          submit();
        }
      }}
    >
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          className="city-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          list="cities"
        />
        <datalist id="cities">
          {cities.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </datalist>
        {isCityError ? (
          <div className="error">Please enter your city</div>
        ) : null}
      </div>
      <div>
        <button disabled={isButtonDisabled} role="submit">
          Choose next bar for me
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
