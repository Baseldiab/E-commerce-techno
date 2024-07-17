import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {
  title: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="!min-w-2/3" sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ProductContent(props: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="py-5" sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          // borderRight: 1, borderColor: "divider",
          minWidth: "130px",
          maxWidth: "130px",
          "& .Mui-selected": {
            borderBottom: 2,
            borderColor: "#FA8232",
            color: "#000",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab label="Overview" {...a11yProps(0)} />
        <Tab label="Additional" {...a11yProps(1)} />
        <Tab label="Specifications" {...a11yProps(2)} />
        <Tab label="Rating" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h5 className="mb-1 font-semibold">Description</h5>
        {props.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h5 className="mb-1 font-semibold">Title</h5>
        <p className="singleProduct__name text-capitalize">{props.title}</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h5 className="mb-1 font-semibold">Description</h5>
        {props.description}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* RATING */}
        <h5 className="mb-1 font-semibold">Rating</h5>

        <Rating name="read-only" value={props.rating.rate} readOnly />

        <div className="flex justify-start items-center my-1">
          <span className="text-gray-900 font-bold me-0.5">{`${props.rating.rate} overall rate `}</span>
          <span className="text-gray-500">{` (${props.rating.count} Reviews)`}</span>
        </div>
      </TabPanel>
    </Box>
  );
}
