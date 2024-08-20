type Text = {
    antonyms: string[];
  };
  
  type Antonym = {
    meanings: Text[];
  };
  
  type AntonymProps = {
    antonym: Antonym[];
  };
  
  const Antonyms = ({ antonym }: AntonymProps) => {
    console.log(antonym);
    
    if (!antonym.length || !antonym[0].meanings[0].antonyms.length) {
      return <div>Antonyms not found</div>;
    }

    return (
      <div className="columns-2 md:columns-3">
        {antonym.map((val) =>
          val.meanings.map((means) =>
            means.antonyms.map((antonym, def) => 
            <li key={def}>{antonym}</li>)
          )
        )}
      </div>
    );
  };
  
  export default Antonyms;
  