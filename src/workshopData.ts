const assetUrls = import.meta.glob<string>("./assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const asset = (fileName: string) => assetUrls[`./assets/${fileName}`];

export type WorkshopItem = {
  en: string;
  cn: string;
  file: string;
  image?: string;
};

export type WorkshopCategory = {
  id: string;
  cn: string;
  en: string;
  items: WorkshopItem[];
};

const item = (en: string, cn: string, file: string): WorkshopItem => ({
  en,
  cn,
  file,
  image: asset(file),
});

export const workshopCategories: WorkshopCategory[] = [
  {
    id: "heavy-assembly",
    cn: "重型装配车间",
    en: "Heavy Assembly Workshop",
    items: [
      item("Cutting Workshop", "下料车间", "Cutting_workshop.png"),
      item("Welding Workshop", "焊接车间", "welding_workshop.png"),
      item(
        "Aging, Blasting & Painting Workshop",
        "时效、喷砂及喷漆车间",
        "Aging_blasting_painting_workshop.png",
      ),
    ],
  },
  {
    id: "precision-machining",
    cn: "精密机加工中心",
    en: "Precision Machining Center",
    items: [
      item("Laser Cutting Machine", "激光切割机", "Laser_Cutting_Machine.png"),
      item("CNC Flame Cutting Machine", "数控火焰切割机", "CNC_Flame_Cutting_Machine.png"),
      item("Edge Milling Machine", "铣边机", "Edge_Milling_Machine.png"),
      item(
        "Robotic Groove Cutting Machine",
        "机器人坡口切割设备",
        "Groove_Robot_Cutting_Machine.png",
      ),
    ],
  },
  {
    id: "welding-manufacturing",
    cn: "焊接制造车间",
    en: "Welding Manufacturing Workshop",
    items: [
      item("Pre-treatment Machine", "预处理设备", "Pretreating_Machine.png"),
      item("Automated Guided Vehicle", "自动导引运输车", "automated_guided_vehicle.png"),
      item(
        "MAG Semi-automatic Welding Machines",
        "MAG 半自动焊机",
        "MAG_semi-automatic_welding_machines.png",
      ),
      item("Laser Welding Machine", "激光焊接机", "Laser_Welding_Machine.png"),
      item(
        "Two-operation Robot Welding Station",
        "双工位机器人焊接站",
        "2-operation_robot_welding_station.png",
      ),
      item(
        "Two-operation Robot Welding Workpiece",
        "双工位机器人焊接工件",
        "2-operation_robot_welding_station_workpiece.png",
      ),
      item(
        "Robot Welding Station for Angle Plates and Rockers",
        "角板及摇臂机器人焊接站",
        "Robot_welding_station_for_angle_plate_and_rocker.png",
      ),
      item(
        "Angle Plate and Rocker Welding Workpiece",
        "角板及摇臂焊接工件",
        "Robot_welding_station_for_angle_plate_and_rocker_workpiece.png",
      ),
      item("Gantry Robot Welding Station", "龙门机器人焊接站", "Gantry_robot_welding_station.png"),
      item(
        "Gantry Robot Welding Workpiece",
        "龙门机器人焊接工件",
        "Gantry_robot_welding_station_workpiece.png",
      ),
      item(
        "Automatic Special Welder for Gears",
        "齿轮专用自动焊接设备",
        "Auto_special_welder_for_gears.png",
      ),
      item("Gear Welding Workpiece", "齿轮焊接工件", "Auto_special_welder_for_gears_workpiece.png"),
      item(
        "Robot Welding Station for Ribs",
        "加强筋机器人焊接站",
        "Robot_welding_station_for_ribs.png",
      ),
      item(
        "Automatic Large Gantry Movable Robot Welding System",
        "大型自动移动式龙门机器人焊接系统",
        "Auto_large_gantry_movable_robot_welding_system.png",
      ),
      item("Thermal Aging Furnace 200T", "200T 热时效炉", "Thermal_aging_furnace_200T.png"),
      item("Thermal Aging Furnace 100T", "100T 热时效炉", "Thermal_aging_furnace_100T.png"),
      item("Sandblasting Equipment", "喷砂设备", "Sand_blasting.png"),
    ],
  },
  {
    id: "auxiliary-facilities",
    cn: "辅助与配套设施",
    en: "Auxiliary & Supporting Facilities",
    items: [
      item("Painting Rooms", "喷漆房", "Painting_Rooms.png"),
      item("Dust Treatment Room 1", "粉尘处理室 1", "Dust_treatment_room_1.png"),
      item("Dust Treatment Room 2", "粉尘处理室 2", "Dust_treatment_room_2.png"),
      item("Fresh Air System Air Outlet", "新风系统出风口", "Fresh_air_system_air_outlet.png"),
      item(
        "Fresh Air System Control Panel",
        "新风系统控制面板",
        "Fresh_air_system_control_panel.png",
      ),
      item("Fresh Air System Outdoor Unit", "新风系统室外机", "Fresh_air_system_outdoor_unit.png"),
      item(
        "Fresh Air System Ventilation Inlet",
        "新风系统进风口",
        "Fresh_air_system_ventilation_inlet.png",
      ),
    ],
  },
  {
    id: "quality-control",
    cn: "质量控制能力",
    en: "Quality Control & Inspection",
    items: [
      item("Raw Material Control", "原材料质量控制", "Raw_material_control.png"),
      item("Welding Process Qualification", "焊接工艺评定", "Welding_process_qualification.png"),
      item("UT Report", "超声检测报告", "UT_report.png"),
      item("Weld Joint Details", "焊缝细节检查", "Weld_joint_details.png"),
      item("Weld Inspection – ISO 5817", "焊缝质量检测", "Weld_inspection_ISO5817.png"),
      item("Ultrasonic Testing", "超声波检测", "Ultrasonic_test.png"),
      item("Post-weld Heat Treatment", "焊后热处理", "Heat_treatment_after_welding.png"),
      item("Primer Paint Thickness Test", "底漆膜厚测试", "Priming_paint_thickness_test.png"),
      item("Primer Paint Adhesion Test", "底漆附着力测试", "Priming_paint_adhesion_test.png"),
    ],
  },
];
