import Art from "./Art";

const ArtList = ({artworks}) => {

    const artListComponent = artworks.map((art, index) => {
        return <Art art={art} key={index}/>
    })
    
    return ( 
        <>
            <h2>List of Artworks</h2>
            {artListComponent}
        </>
    );
}
 
export default ArtList;