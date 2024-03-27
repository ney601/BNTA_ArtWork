const Art = ({art}) => {

    return ( 
        <>
            <h4>Title: {art.title}</h4>
            <img src={art.primaryImageSmall} width="400"  height="500"></img>
            {/* <p>Constituent: {art.constituents.name}</p> */}
            <p>Accession Year: {art.accessionYear}</p>
        </>
    );
}
 
export default Art;