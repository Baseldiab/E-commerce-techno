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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="!min-w-2/3 px-1">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductContent(props: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className=" py-5 md:my-6 my-4 bg-gray-100 myContainer min-h-52">
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        centered
        sx={{
          // borderRight: 1, borderColor: "divider",
          // minWidth: "130px",
          // maxWidth: "130px",
          marginBottom: 2,
          padding: 0,

          "& .Mui-selected": {
            borderBottom: 2,
            borderColor: "#FA8232",
            color: "#FA8232",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab label="Overview" {...a11yProps(0)} />
        <Tab label="Additional" {...a11yProps(1)} />
        <Tab label="Specifications" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h5 className="mb-1 font-semibold">Description</h5>
        <p className="text-gray-500">{props.description}</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex justify-start gap-1 max-md:my-1">
          <h5 className="mb-1 font-semibold">Title :</h5>
          <p className="singleProduct__name text-capitalize text-gray-500">{props.title}</p>
        </div>
        <div className="flex justify-start flex-wrap items-center md:gap-1 max-md:my-1">
          <h5 className="mb-1 font-semibold">Rating :</h5>
          <p className="text-capitalize text-gray-500 flex items-center gap-1">
            <Rating name="read-only" value={props.rating.rate} readOnly />
            <span>{props.rating.rate}</span>
            <span>{`(${props.rating.count} reviews)`}</span>
          </p>
        </div>
        {/* AVAILABILITY */}
        <div className="flex justify-start gap-1 max-md:my-1">
          <h5 className="mb-1 font-semibold">Availability :</h5>
          <p className=" text-gray-600">In Stock</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h5 className="mb-1 font-semibold">Specifications</h5>
        <p className="text-gray-500">{props.description}</p>
      </TabPanel>
    </Box>
  );
}
