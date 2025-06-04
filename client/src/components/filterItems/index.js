import './index.css';
const FilterItems = ({filterData,filterOptionsData}) =>{
    const {code,name} = filterData;
    const onClickfilter = ()=>{
        filterOptionsData(code);
    }
    return(
        <div>
            <h5 className='name-styles' onClick={onClickfilter}>{name}</h5>
        </div>
    );
}

export default FilterItems;