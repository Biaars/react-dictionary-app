type Meaning = {
  partOfSpeech: string;
  definitions: {
    definition: string;
  }[];
};

type Mean = {
  meanings: Meaning[];
};

type MeaningListProps = {
  mean: Mean[];
};

const MeaningList = ({ mean }: MeaningListProps) => {
  console.log(mean);

  if (
    mean.length === 0 ||
    mean[0].meanings.length === 0 ||
    mean[0].meanings[0].definitions.length === 0
  ) {
    return <div>Meaning not found</div>;
  }

  return (
    <div>
      {mean.map((val) =>
        val.meanings.map((means) => {
          if (means.partOfSpeech === "noun") {
            return (
              <div>
                <span className="text-blue-800/75 font-bold">
                  {means.partOfSpeech}
                </span>
                {means.definitions.map((def, index) => (
                  <div key={index}>
                    <li className="font-sans"> {def.definition}</li>{" "}
                    <br />
                  </div>
                ))}
              </div>
            );
          }
          // if (means.partOfSpeech === "verb") {
          //   return (
          //     <div>
          //       <span className="text-blue-800/75 font-bold">
          //         {means.partOfSpeech}
          //       </span>
          //       {means.definitions.map((def, index) => (
          //         <div key={index}>
          //           <span></span>
          //           <li className="list-none font-sans"> {def.definition}</li>
          //         </div>
          //       ))}
          //     </div>
          //   );
          // }
        })
      )}
    </div>
  );
};

export default MeaningList;
