import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import product from "@/app/admin/products/modals/product";

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductDetailsTab({ details, sizes }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const modules = {
    toolbar: false,
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Return Policies" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box className="flex gap-2 items-center">
          <p className="text-sm font-semibold text-gray-600">Fabric:</p>
          <p className="text-sm text-gray-700">{details[0]}</p>
        </Box>
        <Box className="flex gap-2 items-center">
          <p className="text-sm font-semibold text-gray-600">
            Sizes Available:
          </p>
          <p className="text-sm text-gray-700 flex gap-2 items-center">
            {sizes.map((size, index) => (
              <span key={index}>{size} </span>
            ))}
          </p>
        </Box>
        {/* Shipping */}
        <Box className="flex gap-2 items-center">
          <p className="text-sm font-semibold text-gray-600">Shipping:</p>
          <p className="text-sm text-gray-700">Ships within 1 to 3 days.</p>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        We accept returns within 7 days of delivery for unworn, unwashed items
        with original tags and packaging. Items showing signs of wear, damage,
        or missing accessories are not eligible. Return shipping costs are the
        customer's responsibility unless the item is defective or incorrect.
        Refunds are processed within 7 business days of receiving the return.
        For exchanges, please contact our support team. Let me know if you'd
        like this adjusted further!
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Absolutely love the quality and comfort of this hoodie set! Perfect fit
        and stylish design. Highly recommend! 🌟" Share your experience on
        Facebook and let others know why you love it!
      </CustomTabPanel>
    </Box>
  );
}
