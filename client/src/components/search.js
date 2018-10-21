import Searchbar from 'material-ui-search-bar'


render(){
    return(
    <Searchbar onChange={()=>console.log("changed")}
    onRequestSearch={()=>console.log("Searching...")}
    style={
        {
        margin: '0 auto',
        maxWidth: 150
        }
    }/>
    )   
}