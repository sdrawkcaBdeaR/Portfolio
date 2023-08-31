import Modaltag from './Modaltag';

const ShowBlog=({item})=>{
    const darkmodecard={
        backgroundColor:"#3B3B3B",
        color:"white",
        border:"0px"
    }

    return (
        <div className='card'>
            <img src={item.imgadd} alt={item.imgadd}/>
            <p><span>{item.title}</span></p>
            <p className='truncated-description' >{item.description}</p>
            <p className='quote'>{item.quote}</p>
        </div>
    )
}

export default ShowBlog