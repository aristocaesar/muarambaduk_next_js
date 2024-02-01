interface ListItemProps {
    value : string
}
const ListItem : React.FC<ListItemProps> = ({value}) => {
    return <li>{value}</li>
}

export default ListItem;