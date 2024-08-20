type Text = {
  synonyms: string[];
};

type Synonym = {
  meanings: Text[];
};

type SynonymProps = {
  synonym: Synonym[];
};

const Synonyms = ({ synonym }: SynonymProps) => {
  console.log(synonym);

  if (!synonym.length || !synonym[0].meanings[0].synonyms.length) {
    return <div>Synonyms not found</div>;
  }

  return (
    <div className="colums-2 md:columns-3">
      {synonym.map((val) =>
        val.meanings.map((means) =>
          means.synonyms.map((synonym, def) => <li key={def}>{synonym}</li>)
        )
      )}
    </div>
  );
};

export default Synonyms;
