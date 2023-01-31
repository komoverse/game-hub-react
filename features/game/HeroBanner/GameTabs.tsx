import { COLOR } from "@/utils/globalVariable";
import { Box, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GameTabs = ({ tabs = [] }: { tabs: string[] }) => {
  console.log('🚀 ~ GameTabs ~ tabs', tabs);
  const router = useRouter();
  const [currTab, setCurrTab] = useState(() => tabs.length && tabs[0]);

  const handleChangeTab = (event: React.SyntheticEvent, value: string) => {
    setCurrTab(value);
    if (value === "overview") {
      value = "";
    }
    const { game } = router.query;
    const nextRoute = `/${game}/${value}`;
    router.push(nextRoute, nextRoute);
  };

  useEffect(() => {
    if (router.pathname !== "/[game]") {
      const path = router.pathname.split("/");
      const tab = path[path.length - 1];
      setCurrTab(tab);
    }
  }, [router]);

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        background: COLOR.backgroundRoot,
      }}
    >
      <Tabs
        value={currTab}
        onChange={handleChangeTab}
        aria-label="basic tabs example"
        variant="scrollable"
      >
        {tabs.map((item, i) => (
          <Tab key={i} sx={{ minWidth: "172px" }} value={item} label={item} />
        ))}
      </Tabs>
    </Box>
  );
};

export default GameTabs;
