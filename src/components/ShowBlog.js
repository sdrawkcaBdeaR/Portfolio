import Modaltag from './Modaltag';

const ShowBlog=({item,state,index})=>{
    const darkmodecard={
        backgroundColor:"#3B3B3B",
        color:"white",
        border:"0px"
    }
    const buttom=(index%2)?(<img className='bimg' src={item.imgadd} alt={item.imgadd}/>):null;
    const top=(index%2)?null:(<img className='bimg' src={item.imgadd} alt={item.imgadd}/>);

    return (
        <div className='card' style={state?darkmodecard:{}}>
            <div className='icard'>
                {top}
                <div>
                    <p><span>{item.title}</span></p>
                    <p className='truncated-description' >{item.description}</p>
                    <Modaltag desp={item.description} />
                </div>
                {buttom}
            </div>
        </div>
    )
}

export default ShowBlog