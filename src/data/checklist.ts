import type { Checklist } from "../type/checklist";

export interface Data extends Checklist {
  isSub?: boolean;
  id: number;
  
}

// export const checklistAbbreviationsData: Data[] = [
//   {
//     id: 0,
//     left: "Cockpit Side Panel",
//     right: "CSP-L/CSP-R",
//   },
//   {
//     id: 1,
//     left: "Control Display Unit",
//     right: "CDU",
//     color: "amber",
//   },
//   {
//     id: 2,
//     left: "Engine Indicating and Crew Alerting System",
//     right: "EICAS",
//     color: "amber",
//   },
//   { id: 3, left: "Flight Management Computer", right: "FMC", color: "amber" },
//   {
//     id: 4,
//     left: "Full Authority Digital Engine Control",
//     right: "FADEC",
//     color: "amber",
//   },
//   {
//     id: 5,
//     left: "Instrument Panel (Left/Right/Upper)",
//     right: "IP-L/IP-R/IP-U",
//     color: "amber",
//   },
//   { id: 6, left: "Long Range Cruise", right: "LRC", color: "amber" },
//   { id: 7, left: "Multifonction Display", right: "MFD", color: "amber" },
//   { id: 8, left: "Overhead Panel", right: "OHP", color: "amber" },
//   { id: 9, left: "Pedestal", right: "PED", color: "amber" },
//   { id: 10, left: "Primary Flight Display", right: "PFD", color: "amber" },
//   {
//     id: 11,
//     left: "Right/Left Line Select Key (Number) button",
//     right: "R/L LSK Number",
//     color: "amber",
//   },
// ];

export const preliminaryCockpitChecklistData: Data[] = [
  { id: 12, left: "Aircraft Doors", right: "OPEN", validate: (d) => {
    const val = d["sim/cockpit2/switches/door_open"];
    if (Array.isArray(val)) {
      return val[0] === 1
    }
    return val === 1;
  } },
  { id: 13, left: "Oxygen Quantity", right: "Check in green arc" },
  { id: 14, left: "Landing Gear Handle", right: "Down" },
  { id: 15, left: "Speebrake Handle", right: "Zero" },
  { id: 16, left: "Throttles", right: "Cut off" },
  { id: 17, left: "Flap Handle", right: "Agrees with Flaps Position" },
  { id: 18, left: "All Switches", right: "Off, Norm or AUTO" },
  { id: 19, left: "BATT 1 & 2", right: "ON" },
  { id: 20, left: "EICAS Switch", right: "EICAS" },
  { id: 21, right: "", left: "", subtitle: "EICAS Panel" },
  {
    id: 22,
    left: "ELEC Page",
    right: "Check batt 24V",
    isSub: true,
    tooltip:
      "Maximum lateral imbalance is 90kgs/200lbs. Correct prior to flight",
  },
  { id: 23, left: "FUEL Page", right: "Check balance", isSub: true },
  { id: 24, left: "EICAS Switch", right: "Off" },
  { id: 25, left: "BATT 1 & 2", right: "OFF" },
  {
    id: 26,
    left: "",
    right: "",
    subtitle: "Sandby Power Switch Test",
  },
  { id: 27, left: "STBY PWR", right: "Test", isSub: true },
  {
    id: 28,
    left: "STBY PWR",
    right: "On",
    isSub: true,
    tooltip:
      "Red Light illuminates. Standby Primary Instruments, Standby Engine Instrument Panel, Reversionary Control Panel and Standby Radio Control Unit and receives power",
  },
  { id: 29, left: "STBY PWR", right: "Off", isSub: true },
];

export const exteriorCabinInspection: Data[] = [
  {
    id: 29,
    subtitle: "Nose (Left & Right)",
    right: "",
    left: "",
  },
  {
    id: 30,
    left: "Left, Right and Standby Pitot Tubes",
    right: "Clear",
    isSub: true,
  },
  {
    id: 31,
    left: "Left and Right Static Ports",
    right: "Clear",
    isSub: true,
  },
  {
    id: 32,
    left: "Left and Right Air Temperature Probe",
    right: "Clear",
    isSub: true,
  },
  {
    id: 33,
    left: "Left and Right Angle-of-attack Vane",
    right: "Free",
    isSub: true,
  },
  {
    id: 34,
    left: "Nose Service Compartment Doors (2)",
    right: "Secure and locked",
    isSub: true,
  },
  {
    id: 35,
    left: "Nose Gear Door, Wheel, and Tire",
    right: "Condition",
    isSub: true,
  },
  {
    id: 36,
    left: "Top and Bottom Antennas",
    right: "Condition and Secure",
  },
  {
    id: 37,
    left: "",
    right: "",
    subtitle: "Wings (Left & Right)",
  },
  {
    id: 38,
    left: "Main Gear Door, Wheel, Tire, and Brake",
    right: "Condition",
    isSub: true,
  },
  {
    id: 39,
    left: "Aileron, Speed Brakes, and Flaps",
    right: "Condition",
    isSub: true,
  },
  {
    id: 40,
    left: "",
    right: "",
    subtitle: "Tail",
  },
  {
    id: 41,
    left: "Engines Fan Duct and Fan",
    right: "condition",
    isSub: true,
  },
  {
    id: 42,
    left: "Thrust Reverser Buckets",
    right: "Condition and Stowed",
    isSub: true,
  },
  {
    id: 43,
    left: "APU Exhaust",
    right: "Clear",
    isSub: true,
  },
  {
    id: 44,
    left: "Baggage Compartment Door (left side)",
    right: "Secure and locked",
    isSub: true,
  },
];

export const cockpitPreparation: Data[] = [
  {
    id: 45,
    left: "Interior Master Switch",
    right: "Normal and Guarded",
  },
  {
    id: 46,
    left: "",
    right: "",
    subtitle: "DC Power Panel",
  },
  {
    id: 47,
    left: "BATT 1 & 2",
    right: "ON",
    isSub: true,
  },
  {
    id: 48,
    left: "External Power (if available)",
    right: "ON",
    isSub: true,
  },
  {
    id: 49,
    left: "Left & Rights Hands Generators",
    right: "UP",
    isSub: true,
  },
  {
    id: 50,
    left: "Avionics Power",
    right: "ON",
  },
  {
    id: 51,
    left: "EICAS",
    right: "EICAS",
  },
  {
    id: 52,
    left: "",
    right: "",
    subtitle: "Fuel Boost Panel",
  },
  {
    id: 53,
    left: "Left & Right Hands Boost",
    right: "Norm",
    isSub: true,
  },
  {
    id: 54,
    left: "",
    right: "",
    subtitle: "FADEC Panel",
  },
  {
    id: 55,
    left: "Left & Right Hands Reset",
    right: "Check Norm",
    isSub: true,
    tooltip: "In NORM mode, computer A is selected",
  },
  {
    id: 56,
    left: "Ignition LH & RH",
    right: "Check norm",
  },
  {
    id: 57,
    left: "Standby Power Switch",
    right: "On",
  },
  {
    id: 58,
    left: "",
    right: "",
    subtitle: "Center Wing Transfer on Fuel Panel",
  },
  {
    id: 59,
    left: "Left & Right Hand",
    right: "Norm",
    isSub: true,
  },
  {
    id: 60,
    left: "",
    right: "",
    subtitle: "Lights Panel",
  },
  {
    id: 60,
    left: "Emergency Exit Lights",
    right: "On (Middle)",
    isSub: true,
    tooltip:
      "Red Light on. Illuminates all the emergency evacuation path lights and signs",
  },
  {
    id: 61,
    left: "Emergency Exit Lights",
    right: "Up (Armed)",
    isSub: true,
  },
  {
    id: 62,
    left: "Instrument Lights (FLOOD LTS, EL, LH, CTR)",
    right: "Set",
    isSub: true,
    tooltip: "12 o'clock position suggested"
  },
  {
    id: 63,
    left: "Passenger Oxygen",
    right: "Auto",
  },
  {
    id: 64,
    left: "",
    right: "",
    subtitle: "Standby Altitude Indicator",
  },
  {
    id: 65,
    left: "Pull to Cage Knob",
    right: "Pull and let go",
    isSub: true,
  },
  {
    id: 66,
    left: "Master warning reset",
    right: "press",
  },
  {
    id: 67,
    left: "Master caution reset",
    right: "press",
  },
  {
    id: 68,
    left: "",
    right: "",
    subtitle: "Anti-ice Panel",
  },
  {
    id: 69,
    left: "windshield heater (lh & rh windshield)",
    right: "on",
    isSub: true,
  },
  {
    id: 70,
    left: "",
    right: "",
    subtitle: "park break recycle (hydraulics panel)",
  },
  {
    id: 71,
    left: "a aux pump",
    right: "up",
    isSub: true,
  },
  {
    id: 72,
    left: "park break",
    right: "recycle",
    isSub: true,
    tooltip: "Push DOWN and UP",
  },
  {
    id: 73,
    left: "a aux pump",
    right: "off",
    isSub: true,
  },
  {
    id: 74,
    left: "",
    right: "",
    subtitle: "Lights Panel",
  },
  {
    id: 75,
    left: "seatbelts lights (seat belt lts)",
    right: "up (on)",
    isSub: true,
  },
  {
    id: 76,
    left: "recognition light (recog)",
    right: "as required",
    tooltip:
      "In Citation X, RECOG controls the landing lights through resistors to produce a less intense light, allowing the landing lights to be used as recognition lights and to extend the bulb life. However, in low visibility conditions, using this feature is not recommended.",
    isSub: true,
  },
  {
    id: 77,
    left: "navigation light (nav)",
    right: "up (on)",
    isSub: true,
  },
  {
    id: 78,
    left: "tail flood light (tail flood)",
    right: "as required",
    isSub: true,
  },
  {
    id: 79,
    left: "",
    right: "",
    subtitle: "cabin environmental control panel",
  },
  {
    id: 80,
    left: "left engine bleed air (l eng bld air)",
    right: "hp/lp",
    isSub: true,
  },
  {
    id: 81,
    left: "right engine bleed air (r eng bld air)",
    right: "hp/lp",
    isSub: true,
  },
  {
    id: 82,
    left: "righthand panel lights (rh panel lights)",
    right: "set",
    tooltip: "12 o'clock position suggested"
  },
  {
    id: 83,
    left: "",
    right: "",
    subtitle: "apu panel",
    tooltip: "If no external power and/or desired"
  },
  {
    id: 84,
    left: "master",
    right: "on",
    isSub: true,
  },
  {
    id: 85,
    left: "test button",
    right: "push",
    tooltip: "Check APU announcements on Right Instrument/Cockpit Side Panel go ON and OFF.",
    isSub: true,
  },
  {
    id: 86,
    left: "apu start",
    right: "up and let go",
    isSub: true,
    tooltip: "Hold UP position until the APU starts running (10 RPM), then let go."
  },
  {
    id: 87,
    left: "generator",
    right: "on",
    isSub: true,
    tooltip: "After READY TO LOAD. Check APU AMPS on IP-L"
  },
  {
    id: 88,
    left: "bleed air max cool",
    right: "on",
    isSub: true,
    tooltip: "Enables to turn ON the pack"
  },
  {
    id: 89,
    left: "",
    right: "",
    subtitle: "Cabin Environmental Control Panel",
    tooltip: "Only if APU is available",
  },
  {
    id: 90,
    left: "Cabin and Cockpit Packs (CKPT&CAB PAC)",
    right: "On",
    isSub: true,
  },
  {
    id: 91,
    left: "Cabin and Cockpit Temperature Selectors (CKPT&CAB TEMP SEL)",
    right: "Set",
    isSub: true,
  },
  {
    id: 92,
    left: "Atis Information",
    right: "Get",
  },
  {
    id: 93,
    left: "ATC Flight Clearance (Delivery)",
    right: "request"
  }
];

export const preflightProcedure: Data[] = [
  {
    id: 94,
    left: "APU",
    right: "Started"
  },
  {
    id: 95,
    left: "Aircraft Doors",
    right: "Close",
  },
  {
    id: 96,
    left: "External Power",
    right: "Disconnect and Off",
    tooltip: "If connected"
  },
  {
    id: 97,
    left: "FLT CONTROL SHUTOFF-PUSH Lights (PED)",
    right: "Check all Out",
  },
  {
    id: 98,
    left: "Rotary Test (PED)",
    right: "Rotate to All Positions",
    tooltip: "For each position, listen to ALL the different annunciators. During the FLAP test, FLAPS are extended"
  },
  {
    id: 99,
    left: "A AUX PUMP (IP-L)",
    right: "UP",
  },
  {
    id: 100,
    left: "FLAPS (PED)",
    right: "Retract",
  },
  {
    id: 101,
    left: "A AUX PUMP",
    right: "off",
  },
  {
    id: 102,
    left: "PFD Source Selection (IP-L&R)",
    right: "Select FMS",
  },
  {
    id: 103,
    left: "Lateral Navigation Mode (IP-U)",
    right: "NAV",
  },
  {
    id: 104,
    left: "Vertical Navigation Mode (IP-U)",
    right: "FLC",
    tooltip: "Suggested initially Flight Level Change (FLC) Mode. Select Speed according to desired Climb Schedule. Initial Speed 180 KIAS for an initial smooth climb."
  },
  {
    id: 105,
    left: "Flight Level Change Vertical Speed (IP-U/PFD)",
    right: "180 KIAS",
  },
  {
    id: 106,
    left: "Yaw Damper (YD) (IP-U)",
    right: "ON",
  },
  {
    id: 107,
    left: "Mach Trim (M TRIM) (IP-U)",
    right: "On",
  },
  {
    id: 108,
    left: "",
    right: "",
    subtitle: "Transponder (ATC/TCAS) (PED)",
  },
  {
    id: 109,
    left: "Frequency",
    right: "Set",
    isSub: true,
  },
  {
    id: 110,
    left: "Mode",
    right: "SET ATC ALT and PRESS for STANDBY",
    isSub: true,
  },
  {
    id: 111,
    left: "Heading (HDG) (PED AND PFD)",
    right: "SET TO RUNWAY"
  },
  {
    id: 112,
    left: "Altitude (ALT SEL) (PED and PFD)",
    right: "Set to Cleared"
  },
  {
    id: 113,
    left: "Altimeter BARO (PFD)",
    right: "SET TO LOCAL",
  },
  {
    id: 114,
    left: "Minimums (PFD)",
    right: "Set to 1,000 ft AGL"
  }
]

export const engineStart: Data[] = [
  {
    id: 115,
    left: "ATC Start and Pushback Clearance (Tower)",
    right: "Request",
  },
  {
    id: 116,
    left: "GND REC/ANTI-COLL Lights (IP-L)",
    right: "GND REC (Middle)"
  },
  {
    id: 117,
    left: "",
    right: "",
    subtitle: "EICAS Panel (EICAS)",
  },
  {
    id: 118,
    left: "ENG Page",
    right: "CHECK START PRESS (Green)",
    isSub: true,
  },
  {
    id: 119,
    left: "",
    right: "",
    subtitle: "Cabin Environmental Control Panel (IP-L)",
  },
  {
    id: 120,
    left: "Cabin and Cockpit Packs (CKPT&CAB PAC)",
    right: "Off",
    isSub: true,
  },
  {
    id: 121,
    left: "",
    right: "",
    subtitle: "Engine Start Panel (IP-R)",
  },
  {
    id: 122,
    left: "RH Button",
    right: "Press",
    isSub: true,
  },
  {
    id: 123,
    left: "Right Throttle Engine Lever (PED) (at 10% N2)",
    right: "Idle",
    isSub: true,
  },
  {
    id: 124,
    left: "Right Engine at 60% N2 (IP-U)",
    right: "Can start left eng",
    isSub: true,
  },
  {
    id: 125,
    left: "LH Button",
    right: "Press",
    isSub: true,
  },
  {
    id: 126,
    left: "Left Throttle Engine Lever (PED) (at 10% N2)",
    right: "Idle",
    isSub: true,
  },
  {
    id: 127,
    left: "",
    right: "",
    subtitle: "EICAS Panel (EICAS)",
  },
  {
    id: 128,
    left: "Fuel",
    right: "Check flow pph",
    isSub: true,
  },
  {
    id: 129,
    left: "Hydraulics",
    right: "Check PSI > 3000",
    isSub: true,
  },
  {
    id: 130,
    left: "L ENG BLD AIR Selector",
    right: "LP",
  },
  {
    id: 131,
    left: "R ENG BLD AIR Selector",
    right: "LP",
  },
  {
    id: 132,
    left: "CKPC/CAB PAC",
    right: "ON"
  }
]