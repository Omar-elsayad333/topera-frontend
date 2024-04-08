import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItemIcon from '@mui/material/ListItemIcon'
import InventoryIcon from '@mui/icons-material/Inventory'

interface IProps {
  itemId: string
  open: boolean
  anchorEl: null | HTMLElement
  handleSelect: (itemId: string, eventType: string) => void
  handleClose: (e: React.MouseEvent<HTMLElement>) => void
}

const ChatMenuComponent: React.FC<IProps> = ({ anchorEl, itemId, open, handleClose, handleSelect }) => {
  return (
    <Menu
      open={open}
      id="account-menu"
      anchorEl={anchorEl}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{
        elevation: 0,
        sx: {
          fontSize: '12px',
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.10))',
          mt: 1.5,
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      <MenuItem onClick={(e) => handleSelect(itemId, 'edit')}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        Edit
      </MenuItem>
      <MenuItem onClick={(e) => handleSelect(itemId, 'archive')}>
        <ListItemIcon>
          <InventoryIcon fontSize="small" />
        </ListItemIcon>
        Archive
      </MenuItem>
      <MenuItem onClick={(e) => handleSelect(itemId, 'delete')}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        Delete
      </MenuItem>
    </Menu>
  )
}

export default ChatMenuComponent
