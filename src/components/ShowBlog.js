import Modaltag from './Modaltag';

const ShowBlog=({item,state})=>{
    const darkmodecard={
        backgroundColor:"#3B3B3B",
        color:"white",
        border:"0px"
    }

    return (
        <div className='card' style={state?darkmodecard:{}}>
            <img src={item.imgadd} alt={item.imgadd}/>
            <p><span>{item.title}</span></p>
            <p className='truncated-description' >{item.description}</p>
            <Modaltag desp={item.description} />
        </div>
    )
}

export default ShowBlog