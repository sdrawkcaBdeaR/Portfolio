import Modaltag from './Modaltag';

const ShowBlog=({item,state})=>{
    const darkmodecard={
        backgroundColor:"#3B3B3B",
        color:"white",
        border:"0px"
    }

    return (
        <div className='card' style={state?darkmodecard:{}}>
            <div className='icard'>
                <img className='bimg' src={item.imgadd} alt={item.imgadd}/>
                <div>
                    <p><span>{item.title}</span></p>
                    <p className='truncated-description' >{item.description}</p>
                    <Modaltag desp={item.description} />
                </div>
            </div>
        </div>
    )
}

export default ShowBlog