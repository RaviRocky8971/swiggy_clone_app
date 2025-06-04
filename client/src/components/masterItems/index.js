// MasterItems.jsx
const MasterItems = ({ ItemsData }) => {
    const { itemCode, image } = ItemsData;
    return (
        <div className="master-item">
            <img src={image} alt={itemCode} className="item-image" />
            {/* <p className="item-name">{itemCode}</p> */}
        </div>
    );
};

export default MasterItems;
