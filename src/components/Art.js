const Art = ({art}) => {

    return ( 
        <>
            <h4>Title: {art.title}</h4>
            <img src={art.primaryImageSmall} width="300"  height="300"></img>
            {/* <p>Constituent: {art.constituents.name}</p> */}
            <p>Accession Year: {art.accessionYear}</p>
        </>
    );
}
 
export default Art;