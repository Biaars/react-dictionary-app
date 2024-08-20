import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import Antonyms from "./Antonyms";
import MeaningList from "./MeaningList";
import Synonyms from "./Synonyms";

const ResultList = () => {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );
      setResponse(res.data);
      setError(false);
    } catch (error ) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  if (error || response.length === 0) {
    return (
      <h3 className="text-center mt-10 font-semibold text-gray-500">
        Value not defined
      </h3>
    );
  }

  return (
    <div className="bg-slate-200/25">
      <div className=" container mx-auto p-4 max-w-2xl">
        <div className="border-rounded border-b-gray-300">
          <h3 className="text-2xl font-bold mt-4 text-blue-900">Meanings</h3>
          <hr className="bg-yellow-300/50 py-1"/>
          <MeaningList mean={response} />
          <h3 className="text-2xl font-bold mt-4 text-blue-900">Synonym</h3>
          <hr className="bg-yellow-300/50 py-1"/>
          <Synonyms synonym={response}/>
          <h3 className="text-2xl font-bold mt-4 text-blue-900">Antonym</h3>
          <hr className="bg-yellow-300/50 py-1"/>
          <Antonyms antonym={response} />
        </div>
      </div>
    </div>
  );
};

export default ResultList;
