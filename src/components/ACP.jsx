import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import { userData } from "../fb/firebaseFunctions";
import { useNavigate } from "react-router-dom";

function ACP() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userDetail, setuserDetail] = useState();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("uid");

    navigate("/login");
  };
  let uid = localStorage.getItem("uid");
  async function profileDetail() {
    if (uid != null) {
      const userProfile = await userData(uid);
      Promise.resolve();
      setuserDetail(userProfile);
    }
  }
  useEffect(() => {
    profileDetail();
  }, []);
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 54, height: 54 }}
              src={userDetail?.profileimg}
            ></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            bgcolor: "#F6F6F6",
            mt: "-1 !important",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Avatar src={userDetail?.profileimg} />
          <Stack direction={"column"}>
            <Typography>{userDetail ? userDetail.Uname : "Profile"}</Typography>
            <Typography>
              {userDetail ? userDetail.email : "profile@email.com"}
            </Typography>
          </Stack>
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate("/products");
          }}
        >
          Products
        </MenuItem>
        <Divider />

        <MenuItem
          onClick={() => {
            if (uid != null) {
              navigate("/cart");
            } else {
              navigate("/login");
            }
          }}
        >
          My Cart
        </MenuItem>
        <Divider />
        {uid != null ? (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default ACP;
