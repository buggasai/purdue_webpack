"use strict";

const Territories = [
  {
    TerritoryId: 1,
    TerritoryName: "1250dfdsd"
  },
  {
    TerritoryId: 2,
    TerritoryName: "Sihanoukville"
  },
  {
    TerritoryId: 3,
    TerritoryName: "Pedrulheira"
  },
  {
    TerritoryId: 4,
    TerritoryName: "Birmingham"
  },
  {
    TerritoryId: 5,
    TerritoryName: "Kwolla"
  },
  {
    TerritoryId: 6,
    TerritoryName: "Xiaoshi"
  },
  {
    TerritoryId: 7,
    TerritoryName: "Bankaw"
  },
  {
    TerritoryId: 8,
    TerritoryName: "Bayside"
  },
  {
    TerritoryId: 9,
    TerritoryName: "Shiwan"
  },
  {
    TerritoryId: 10,
    TerritoryName: "Singaparna"
  }
];

const Doctors = [
  {
    DoctorId: 1,
    DoctorName: "Alanah Richardet",
    TerritoryId: 8
  },
  {
    DoctorId: 2,
    DoctorName: "Connie Vowden",
    TerritoryId: 3
  },
  {
    DoctorId: 3,
    DoctorName: "Balduin Gallie",
    TerritoryId: 3
  },
  {
    DoctorId: 4,
    DoctorName: "Felike Buckmaster",
    TerritoryId: 1
  },
  {
    DoctorId: 5,
    DoctorName: "Elysha Macon",
    TerritoryId: 7
  },
  {
    DoctorId: 6,
    DoctorName: "Sandi Stearnes",
    TerritoryId: 9
  },
  {
    DoctorId: 7,
    DoctorName: "Conny Megany",
    TerritoryId: 10
  },
  {
    DoctorId: 8,
    DoctorName: "Mindy Kose",
    TerritoryId: 10
  },
  {
    DoctorId: 9,
    DoctorName: "Chan Windibank",
    TerritoryId: 4
  },
  {
    DoctorId: 10,
    DoctorName: "Mohandis Minci",
    TerritoryId: 10
  },
  {
    DoctorId: 11,
    DoctorName: "Price Grier",
    TerritoryId: 10
  },
  {
    DoctorId: 12,
    DoctorName: "Zollie Mityushin",
    TerritoryId: 2
  },
  {
    DoctorId: 13,
    DoctorName: "Dag Fishburn",
    TerritoryId: 2
  },
  {
    DoctorId: 14,
    DoctorName: "Maggee Causbey",
    TerritoryId: 6
  },
  {
    DoctorId: 15,
    DoctorName: "Maddie Quilligan",
    TerritoryId: 9
  },
  {
    DoctorId: 16,
    DoctorName: "Nerita Shipman",
    TerritoryId: 8
  },
  {
    DoctorId: 17,
    DoctorName: "Donaugh Pursglove",
    TerritoryId: 5
  },
  {
    DoctorId: 18,
    DoctorName: "Tine Yokel",
    TerritoryId: 7
  },
  {
    DoctorId: 19,
    DoctorName: "Nixie Healeas",
    TerritoryId: 7
  },
  {
    DoctorId: 20,
    DoctorName: "Rey Brain",
    TerritoryId: 2
  },
  {
    DoctorId: 21,
    DoctorName: "Verena Polo",
    TerritoryId: 3
  },
  {
    DoctorId: 22,
    DoctorName: "Randa Housaman",
    TerritoryId: 9
  },
  {
    DoctorId: 23,
    DoctorName: "Gaspar Cubin",
    TerritoryId: 7
  },
  {
    DoctorId: 24,
    DoctorName: "Quillan Randle",
    TerritoryId: 9
  },
  {
    DoctorId: 25,
    DoctorName: "Wini Flavelle",
    TerritoryId: 4
  },
  {
    DoctorId: 26,
    DoctorName: "Ardisj Goody",
    TerritoryId: 8
  },
  {
    DoctorId: 27,
    DoctorName: "Alvina Curzon",
    TerritoryId: 10
  },
  {
    DoctorId: 28,
    DoctorName: "Phillipe Ben",
    TerritoryId: 8
  },
  {
    DoctorId: 29,
    DoctorName: "Dionis Bremner",
    TerritoryId: 2
  },
  {
    DoctorId: 30,
    DoctorName: "Leann Marven",
    TerritoryId: 4
  },
  {
    DoctorId: 31,
    DoctorName: "Yanaton Craiker",
    TerritoryId: 5
  },
  {
    DoctorId: 32,
    DoctorName: "Willard Manuele",
    TerritoryId: 1
  },
  {
    DoctorId: 33,
    DoctorName: "Rafi Dungate",
    TerritoryId: 4
  },
  {
    DoctorId: 34,
    DoctorName: "Edee Hourigan",
    TerritoryId: 1
  },
  {
    DoctorId: 35,
    DoctorName: "Fanny Olivo",
    TerritoryId: 9
  },
  {
    DoctorId: 36,
    DoctorName: "Adoree Sommerly",
    TerritoryId: 2
  },
  {
    DoctorId: 37,
    DoctorName: "Pietra Brason",
    TerritoryId: 9
  },
  {
    DoctorId: 38,
    DoctorName: "Pinchas Denisard",
    TerritoryId: 6
  },
  {
    DoctorId: 39,
    DoctorName: "Lilly Cargen",
    TerritoryId: 3
  },
  {
    DoctorId: 40,
    DoctorName: "Siouxie Overstall",
    TerritoryId: 1
  },
  {
    DoctorId: 41,
    DoctorName: "Rodger Eastwood",
    TerritoryId: 6
  },
  {
    DoctorId: 42,
    DoctorName: "Dion Cadwaladr",
    TerritoryId: 2
  },
  {
    DoctorId: 43,
    DoctorName: "Ileane Fominov",
    TerritoryId: 6
  },
  {
    DoctorId: 44,
    DoctorName: "Odette Prichet",
    TerritoryId: 10
  },
  {
    DoctorId: 45,
    DoctorName: "Virgie Scown",
    TerritoryId: 8
  },
  {
    DoctorId: 46,
    DoctorName: "Gypsy Manueli",
    TerritoryId: 5
  },
  {
    DoctorId: 47,
    DoctorName: "Ludovico Stockdale",
    TerritoryId: 2
  },
  {
    DoctorId: 48,
    DoctorName: "Herman Bruneau",
    TerritoryId: 1
  },
  {
    DoctorId: 49,
    DoctorName: "Vladamir Langdridge",
    TerritoryId: 5
  },
  {
    DoctorId: 50,
    DoctorName: "Lazare Wickersham",
    TerritoryId: 3
  },
  {
    DoctorId: 51,
    DoctorName: "Fleurette O'Sesnane",
    TerritoryId: 7
  },
  {
    DoctorId: 52,
    DoctorName: "Odilia Caris",
    TerritoryId: 8
  },
  {
    DoctorId: 53,
    DoctorName: "Olvan Jennions",
    TerritoryId: 4
  },
  {
    DoctorId: 54,
    DoctorName: "Brita Tamplin",
    TerritoryId: 9
  },
  {
    DoctorId: 55,
    DoctorName: "Oren Frizell",
    TerritoryId: 5
  },
  {
    DoctorId: 56,
    DoctorName: "Ursola Reeve",
    TerritoryId: 2
  },
  {
    DoctorId: 57,
    DoctorName: "Cassey Gianilli",
    TerritoryId: 8
  },
  {
    DoctorId: 58,
    DoctorName: "Dona Dummer",
    TerritoryId: 7
  },
  {
    DoctorId: 59,
    DoctorName: "Vonny Fenna",
    TerritoryId: 5
  },
  {
    DoctorId: 60,
    DoctorName: "Sydelle Bolle",
    TerritoryId: 1
  },
  {
    DoctorId: 61,
    DoctorName: "Turner Gustus",
    TerritoryId: 7
  },
  {
    DoctorId: 62,
    DoctorName: "Natty Newlands",
    TerritoryId: 10
  },
  {
    DoctorId: 63,
    DoctorName: "Elayne Swigg",
    TerritoryId: 3
  },
  {
    DoctorId: 64,
    DoctorName: "Ruprecht De Carlo",
    TerritoryId: 6
  },
  {
    DoctorId: 65,
    DoctorName: "Noach O'Sharkey",
    TerritoryId: 6
  },
  {
    DoctorId: 66,
    DoctorName: "Grant Chaffer",
    TerritoryId: 2
  },
  {
    DoctorId: 67,
    DoctorName: "Jilleen Lightbowne",
    TerritoryId: 1
  },
  {
    DoctorId: 68,
    DoctorName: "Casie Sellers",
    TerritoryId: 10
  },
  {
    DoctorId: 69,
    DoctorName: "Euell Palay",
    TerritoryId: 4
  },
  {
    DoctorId: 70,
    DoctorName: "Dewey Thies",
    TerritoryId: 4
  },
  {
    DoctorId: 71,
    DoctorName: "Charlene Fellows",
    TerritoryId: 8
  },
  {
    DoctorId: 72,
    DoctorName: "Meridith MacSharry",
    TerritoryId: 2
  },
  {
    DoctorId: 73,
    DoctorName: "Anjanette Mapplethorpe",
    TerritoryId: 10
  },
  {
    DoctorId: 74,
    DoctorName: "Russ Fishwick",
    TerritoryId: 9
  },
  {
    DoctorId: 75,
    DoctorName: "Rebbecca Grouvel",
    TerritoryId: 10
  },
  {
    DoctorId: 76,
    DoctorName: "Sylvan Larvor",
    TerritoryId: 6
  },
  {
    DoctorId: 77,
    DoctorName: "Karina Wells",
    TerritoryId: 5
  },
  {
    DoctorId: 78,
    DoctorName: "Juieta Riha",
    TerritoryId: 7
  },
  {
    DoctorId: 79,
    DoctorName: "Chantalle Gentil",
    TerritoryId: 9
  },
  {
    DoctorId: 80,
    DoctorName: "Anni Tarrant",
    TerritoryId: 3
  },
  {
    DoctorId: 81,
    DoctorName: "Dennison Reed",
    TerritoryId: 5
  },
  {
    DoctorId: 82,
    DoctorName: "Carlyle Scullin",
    TerritoryId: 10
  },
  {
    DoctorId: 83,
    DoctorName: "Bell Lackey",
    TerritoryId: 5
  },
  {
    DoctorId: 84,
    DoctorName: "Davis Matussevich",
    TerritoryId: 1
  },
  {
    DoctorId: 85,
    DoctorName: "Agnola Vedeniktov",
    TerritoryId: 5
  },
  {
    DoctorId: 86,
    DoctorName: "Zacherie Lanahan",
    TerritoryId: 1
  },
  {
    DoctorId: 87,
    DoctorName: "Hilary Gardiner",
    TerritoryId: 8
  },
  {
    DoctorId: 88,
    DoctorName: "Fredericka Banthorpe",
    TerritoryId: 10
  },
  {
    DoctorId: 89,
    DoctorName: "Rosetta Goldspink",
    TerritoryId: 2
  },
  {
    DoctorId: 90,
    DoctorName: "Herby Filkov",
    TerritoryId: 8
  },
  {
    DoctorId: 91,
    DoctorName: "Natal Pearse",
    TerritoryId: 8
  },
  {
    DoctorId: 92,
    DoctorName: "Kym Clayton",
    TerritoryId: 8
  },
  {
    DoctorId: 93,
    DoctorName: "Bradney Koppe",
    TerritoryId: 6
  },
  {
    DoctorId: 94,
    DoctorName: "Jacquelynn Dalliwater",
    TerritoryId: 5
  },
  {
    DoctorId: 95,
    DoctorName: "Jasmine Dorkins",
    TerritoryId: 1
  },
  {
    DoctorId: 96,
    DoctorName: "Thorn Flavelle",
    TerritoryId: 7
  },
  {
    DoctorId: 97,
    DoctorName: "Osborn Schoroder",
    TerritoryId: 7
  },
  {
    DoctorId: 98,
    DoctorName: "Marielle Pedler",
    TerritoryId: 7
  },
  {
    DoctorId: 99,
    DoctorName: "Noll Boutton",
    TerritoryId: 3
  },
  {
    DoctorId: 100,
    DoctorName: "Cynthia Vamplew",
    TerritoryId: 2
  }
];

const Products = [
  {
    ProductId: 1,
    ProductName: "Butrans® (buprenorphine)",
    ProductKey: "Butrans",
    EnableCopay: 1.0,
    CoPayLimit: 6000.0,
    LowResLogoLocation: "Product 1.png",
    HiResLogoLocation: "Product 1.png",
    IsDefault: 0.0,
    JobCode: "NULL",
    OrderNo: 2.0,
    AddDate: "2015-12-22 19:50:46.000",
    AddUser: "PHMAINpavan.vooka",
    ChangeDate: "2015-12-22 19:50:46.000",
    ChangeUser: "PHMAINpavan.vooka",
    Deleted: 0.0
  },

  /* 2 */
  {
    ProductId: 2,
    ProductName: "OxyContin® (oxycodone HCl)",
    ProductKey: "OxyContin",
    EnableCopay: 1.0,
    CoPayLimit: 6000.0,
    LowResLogoLocation: "Product 2.png",
    HiResLogoLocation: "Product 2.png",
    IsDefault: 1.0,
    JobCode: "NULL",
    OrderNo: 1.0,
    AddDate: "2015-12-22 19:50:46.000",
    AddUser: "PHMAINpavan.vooka",
    ChangeDate: "2015-12-22 19:50:46.000",
    ChangeUser: "PHMAINpavan.vooka",
    Deleted: 0.0
  },

  /* 3 */
  {
    ProductId: 3,
    ProductName: "Hysingla® ER (hydrocodone bitartrate)",
    ProductKey: "Hysingla ER",
    EnableCopay: 1.0,
    CoPayLimit: 3600.0,
    LowResLogoLocation: "Product 3.png",
    HiResLogoLocation: "Product 3.png",
    IsDefault: 0.0,
    JobCode: "NULL",
    OrderNo: 3.0,
    AddDate: "2015-12-22 19:50:46.000",
    AddUser: "PHMAINpavan.vooka",
    ChangeDate: "2015-12-22 19:50:46.000",
    ChangeUser: "PHMAINpavan.vooka",
    Deleted: 0.0
  },

  /* 4 */
  {
    ProductId: 4,
    ProductName: "Symproic® (naldemedine)",
    ProductKey: "Symproic",
    EnableCopay: 1.0,
    CoPayLimit: 6000.0,
    LowResLogoLocation: "Product 4.png",
    HiResLogoLocation: "Product 4.png",
    IsDefault: 0.0,
    JobCode: "NULL",
    OrderNo: 4.0,
    AddDate: "2017-05-30 12:28:01.000",
    AddUser: "PHMAINpavan.vooka",
    ChangeDate: "2017-05-30 12:28:01.000",
    ChangeUser: "PHMAINpavan.vooka",
    Deleted: 0.0
  }
];

/* 1 */
const MessageTypes = [
  {
    CampaignTypeIdentity: 1,
    ProductKey: "Butrans",
    Title: "Formulary Announcement",
    Description: "Formulary Announcement",
    MessageKey: "Formulary Announcement",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 1.0,
    CssClass: "ImprovedAccess",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },
  {
    CampaignTypeIdentity: 2,
    ProductKey: "Hysingla ER",
    Title: "Formulary Announcement",
    Description: "Formulary Announcement",
    MessageKey: "Formulary Announcement",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 1.0,
    CssClass: "ImprovedAccess",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 2 */
  {
    CampaignTypeIdentity: 3,
    ProductKey: "Butrans",
    Title: "Formulary Grid with Access Message",
    Description: "Access Message",
    MessageKey: "Formulary Grid with Access Message",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 2.0,
    CssClass: "ChangedAccess",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },
  {
    CampaignTypeIdentity: 4,
    ProductKey: "OxyContin",
    Title: "Formulary Grid with Access Message",
    Description: "Access Message",
    MessageKey: "Formulary Grid with Access Message",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 2.0,
    CssClass: "ChangedAccess",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 3 */
  {
    CampaignTypeIdentity: 5,
    Title: "Commercial Only Grid",
    ProductKey: "OxyContin",
    Description: "Commercial Message",
    MessageKey: "Commercial Only Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 3.0,
    CssClass: "Access",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 4 */
  {
    CampaignTypeIdentity: 6,
    Title: "Medicare Grid",
    ProductKey: "OxyContin",
    Description: "Medicare Grid",
    MessageKey: "Medicare Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 4.0,
    CssClass: "MedicareStandard",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 1.0
  },

  /* 5 */
  {
    CampaignTypeIdentity: 7,
    ProductKey: "Butrans",
    Title: "Formulary Grid with Medicaid Access Message",
    Description: "Medicaid Message",
    MessageKey: "Formulary Grid with Medicaid Access Message",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 6.0,
    CssClass: "MedicareDualLIS",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 6 */
  {
    CampaignTypeIdentity: 8,
    ProductKey: "Butrans",
    Title: "Formulary Grid",
    Description: "Plan List Message",
    MessageKey: "Formulary Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 7.0,
    CssClass: "Medicaid",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 7 */
  {
    CampaignTypeIdentity: 9,
    ProductKey: "OxyContin",
    Title: "Co-pay Card Grid",
    Description: "Copay Card Message",
    MessageKey: "Co-pay Card Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 8.0,
    CssClass: "PlanList",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },
  {
    CampaignTypeIdentity: 10,
    ProductKey: "Symproic",
    Title: "Co-pay Card Grid",
    Description: "Copay Card Message",
    MessageKey: "Co-pay Card Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 8.0,
    CssClass: "PlanList",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 8 */
  {
    CampaignTypeIdentity: 11,
    ProductKey: "Hysingla ER",
    Title: "Static Grids",
    Description: "Static Grids",
    MessageKey: "AARP Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 0.0,
    AppDeliveryTypeId: 1.0,
    OrderNo: 10.0,
    CssClass: "PlanListAARP",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 9 */
  {
    CampaignTypeIdentity: 12,
    ProductKey: "Hysingla ER",
    Title: "Medicare Part D Grid",
    Description: "Medicare Part D Grid",
    MessageKey: "Medicare Part D Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 4.0,
    CssClass: "MedicareStandardPartD",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 10 */
  {
    CampaignTypeIdentity: 13,
    ProductKey: "Hysingla ER",
    Title: "LIS Grid",
    Description: "LIS Grid",
    MessageKey: "LIS Grid",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 3.0,
    OrderNo: 5.0,
    CssClass: "MedicareDualLISGrid",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "COREACCESSGROUPKevin.Carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "COREACCESSGROUPKevin.Carmichael",
    Deleted: 0.0
  },

  /* 11 */
  {
    CampaignTypeIdentity: 14,
    Title: "Formulary Grid - Restricted",
    ProductKey: "Symproic",
    Description: "Formulary Grid - Restricted",
    MessageKey: "Formulary Grid - Restricted",
    HasDrillDown: 0.0,
    IsEnabled: 1.0,
    IsLocationBound: 1.0,
    AppDeliveryTypeId: 2.0,
    OrderNo: 9.0,
    CssClass: "FormularyGridRestricted",
    MinPlans: 3.0,
    MaxPlans: 10.0,
    AddDate: "2015-11-16 19:53:17.000",
    AddUser: "PHMAINkevin.carmichael",
    ChangeDate: "2015-11-16 19:53:17.000",
    ChangeUser: "PHMAINkevin.carmichael",
    Deleted: 0.0
  }
];

/* 1 */
const Plans = [
  {
    id: 2689485,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT07036",
    PlanID: "P0349010001",
    PlanName: "Bank of America (CVS Health)",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 3,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Grid",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 2 */
  {
    id: 2689822,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT07036",
    PlanID: "P1066010001",
    PlanName: "Department of Defense / Tricare",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 2,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Grid",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 3 */
  {
    id: 2689823,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT07036",
    PlanID: "P1218010001",
    PlanName: "Envision Rx Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 1,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Grid",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 4 */
  {
    id: 2693145,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURHYS03025",
    PlanID: "P0349010001",
    PlanName: "Bank of America (CVS Health)",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "Win",
    PlanRank: 1,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 3,
    ProductName: "Hysingla ER",
    MessageCategory: "Commercial Only Grid",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 5 */
  {
    id: 2693146,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURHYS03025",
    PlanID: "P1066010001",
    PlanName: "Department of Defense / Tricare",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 3,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 3,
    ProductName: "Hysingla ER",
    MessageCategory: "Commercial Only Grid",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 6 */
  {
    id: 2693147,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURHYS03025",
    PlanID: "P1218010001",
    PlanName: "Envision Rx Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 2,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 3,
    ProductName: "Hysingla ER",
    MessageCategory: "Commercial Only Grid",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 7 */
  {
    id: 2693455,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY02018",
    PlanID: "P0349010001",
    PlanName: "Bank of America (CVS Health)",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 3,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Grid with Access Message",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 8 */
  {
    id: 2693456,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY02018",
    PlanID: "P1066010001",
    PlanName: "Department of Defense / Tricare",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 2,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Grid with Access Message",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 9 */
  {
    id: 2693457,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY02018",
    PlanID: "P1218010001",
    PlanName: "Envision Rx Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 1,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Grid with Access Message",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 10 */
  {
    id: 2698486,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURSYM02019",
    PlanID: "P3140040001",
    PlanName: "State of Maine / MaineCare",
    BenType: "State Medicaid",
    Tier: "Non-Preferred",
    Restriction: "PA/SE",
    WinLossFlag: "NULL",
    PlanRank: 1,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 4,
    ProductName: "Symproic",
    MessageCategory: "Formulary Grid with Access Message",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 11 */
  {
    id: 2698489,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURSYM06034",
    PlanID: "P3140040001",
    PlanName: "State of Maine / MaineCare",
    BenType: "State Medicaid",
    Tier: "Non-Preferred",
    Restriction: "PA/SE",
    WinLossFlag: "NULL",
    PlanRank: 1,
    Co_Pay: "$0 - $5",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 4,
    ProductName: "Symproic",
    MessageCategory: "Formulary Grid with Medicaid Access Message",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 12 */
  {
    id: 2700356,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P0062010001",
    PlanName: "Aetna",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 5,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 13 */
  {
    id: 2700357,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P0698010002",
    PlanName: "Cigna",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "Win",
    PlanRank: 1,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 14 */
  {
    id: 2700358,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1017010001",
    PlanName: "CVS Health Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 12,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 15 */
  {
    id: 2700359,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1017020004",
    PlanName: "CVS Health / SilverScript",
    BenType: "Medicare Dual/LIS",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 7,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 16 */
  {
    id: 2700360,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1017020004",
    PlanName: "CVS Health / SilverScript",
    BenType: "Medicare Part D",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 10,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 17 */
  {
    id: 2700361,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1066010001",
    PlanName: "Department of Defense / Tricare",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 9,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 18 */
  {
    id: 2700362,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1218010001",
    PlanName: "Envision Rx Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 14,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 19 */
  {
    id: 2700363,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1218020001",
    PlanName: "Envision Rx",
    BenType: "Medicare Dual/LIS",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 15,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 20 */
  {
    id: 2700364,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1218020001",
    PlanName: "Envision Rx",
    BenType: "Medicare Part D",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 17,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 21 */
  {
    id: 2700365,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1268010001",
    PlanName: "Federal Employee Program",
    BenType: "Commercial",
    Tier: "Tier 3",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 11,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 22 */
  {
    id: 2700366,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1511010001",
    PlanName: "Harvard Pilgrim",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 6,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 23 */
  {
    id: 2700367,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P1988050001",
    PlanName: "Community Health Options",
    BenType: "HIX",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 13,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 24 */
  {
    id: 2700368,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P2075010001",
    PlanName: "MedImpact Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 16,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 25 */
  {
    id: 2700369,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P3130130001",
    PlanName: "State of Florida",
    BenType: "Workers Comp",
    Tier: "Covered",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 19,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 26 */
  {
    id: 2700370,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P3140040001",
    PlanName: "State of Maine / MaineCare",
    BenType: "State Medicaid",
    Tier: "Preferred / PDL",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 2,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 27 */
  {
    id: 2700371,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P3464020012",
    PlanName: "UHC / AARP PDP",
    BenType: "Medicare Dual/LIS",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 3,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 28 */
  {
    id: 2700372,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P3464020012",
    PlanName: "UHC / AARP PDP",
    BenType: "Medicare Part D",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 4,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 29 */
  {
    id: 2700373,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P3660050001",
    PlanName: "Anthem",
    BenType: "HIX",
    Tier: "Tier 3",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 18,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 30 */
  {
    id: 2700374,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURBUT01009",
    PlanID: "P4938010002",
    PlanName: "Catamaran Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 3",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 8,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 1,
    ProductName: "Butrans",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 31 */
  {
    id: 2703013,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURHYS01004",
    PlanID: "P0349010001",
    PlanName: "Bank of America (CVS Health)",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "Win",
    PlanRank: 1,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 3,
    ProductName: "Hysingla ER",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 32 */
  {
    id: 2703014,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURHYS01004",
    PlanID: "P1066010001",
    PlanName: "Department of Defense / Tricare",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 3,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 3,
    ProductName: "Hysingla ER",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 33 */
  {
    id: 2703015,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PURHYS01004",
    PlanID: "P1218010001",
    PlanName: "Envision Rx Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 2,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 3,
    ProductName: "Hysingla ER",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 34 */
  {
    id: 2703419,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P0062010001",
    PlanName: "Aetna",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 4,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 35 */
  {
    id: 2703420,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P0698010002",
    PlanName: "Cigna",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "Win",
    PlanRank: 1,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 36 */
  {
    id: 2703421,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1017010001",
    PlanName: "CVS Health Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 12,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 37 */
  {
    id: 2703422,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1017020004",
    PlanName: "CVS Health / SilverScript",
    BenType: "Medicare Dual/LIS",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 7,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 38 */
  {
    id: 2703423,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1017020004",
    PlanName: "CVS Health / SilverScript",
    BenType: "Medicare Part D",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 10,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 39 */
  {
    id: 2703424,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1066010001",
    PlanName: "Department of Defense / Tricare",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 9,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 40 */
  {
    id: 2703425,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1218010001",
    PlanName: "Envision Rx Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 13,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 41 */
  {
    id: 2703426,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1218020001",
    PlanName: "Envision Rx",
    BenType: "Medicare Dual/LIS",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 14,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 42 */
  {
    id: 2703427,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1218020001",
    PlanName: "Envision Rx",
    BenType: "Medicare Part D",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 16,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 43 */
  {
    id: 2703428,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1243010002",
    PlanName: "Express Scripts Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 11,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 44 */
  {
    id: 2703429,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1511010001",
    PlanName: "Harvard Pilgrim",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 5,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 45 */
  {
    id: 2703430,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P1640010001",
    PlanName: "Hospices of America (Express Scripts)",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 6,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 46 */
  {
    id: 2703431,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P2075010001",
    PlanName: "MedImpact Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 15,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 47 */
  {
    id: 2703432,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P3130130001",
    PlanName: "State of Florida",
    BenType: "Workers Comp",
    Tier: "Covered",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 17,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 48 */
  {
    id: 2703433,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P3464020012",
    PlanName: "UHC / AARP PDP",
    BenType: "Medicare Dual/LIS",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 2,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 49 */
  {
    id: 2703434,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P3464020012",
    PlanName: "UHC / AARP PDP",
    BenType: "Medicare Part D",
    Tier: "Tier 3 Preferred",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 3,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  },

  /* 50 */
  {
    id: 2703435,
    RepEmail: "Aidan.Doyle@pharma.com",
    RunID: 173,
    PrescriberID: 1236252,
    MessageCode: "PUROXY01010",
    PlanID: "P4938010002",
    PlanName: "Catamaran Administered Plans",
    BenType: "Commercial",
    Tier: "Tier 2",
    Restriction: "Null",
    WinLossFlag: "NULL",
    PlanRank: 8,
    Co_Pay: "NULL",
    MinPrintPlans: 0,
    PlanClass: "NULL",
    NoPrint: "Y",
    ProductID: 2,
    ProductName: "OxyContin",
    MessageCategory: "Formulary Announcement",
    CompTier1: "NULL",
    CompTier2: "NULL",
    CompTier3: "NULL",
    PlanProdPer: "NULL",
    FormularyCategory: "U         "
  }
];

module.exports = {
  Territories,
  Doctors,
  Products,
  MessageTypes,
  Plans
};
