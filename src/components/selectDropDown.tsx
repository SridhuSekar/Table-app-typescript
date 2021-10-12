import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";

export const SelectDropDown = () => {
  const [state, setState] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const dataFetch = async (page: number) => {
      const fetcheddata = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=40`
      );
      setState(fetcheddata.data.data);
    };
    dataFetch(8);
  }, []);

  console.log("out", state);

  const aquaticCreatures = state.map((e: any) => ({
    label: e.name,
    value: e._id
  }));

  const handleChange = (selectedOption: any) => {
    console.log(selectedOption);
    setSelected(selectedOption);
  };
  console.log("sel", selected);
  //console.log(aquaticCreatures);
  return (
    <div className='dropDown'>
      <Select
        isMulti
        options={aquaticCreatures}
        //value={selectedOption}
        onChange={handleChange}
      />
      <div>
        {selected.map((e: any) => (
          <p>{e.label}</p>
        ))}
      </div>
    </div>
    // <div>{selected.map(e)=>(<p>{e.label}</p>))}</div>
  );
};
