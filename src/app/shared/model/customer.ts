/**
 * Created by 15050978 on 12/21/2016.
 */
export class Customer {
  s_customerCode: string;
  d_customerRegisterDate: Date;
  s_customerRealCode: string;
  s_customerTitle: string;
  s_customerName: string;
  s_customerGender: string;
  d_customerBirthDateDate: Date;
  s_customerBirthPlace: string;
  s_customerCompany: string;
  s_customerOccupation: string;
  s_customerCellPhone1: string;
  s_customerCellPhone2: string;
  s_customerCellPhone3: string;
  s_customerEmail1: string;
  s_customerEmail2: string;
  s_customerEmail3: string;
  s_customerSiup: string;
  s_customerTdp: string;
  s_customerNppkp: string;
  s_customerNpwp: string;
  s_customerSpecialInstruction: string;
  d_customerFactor1: number;
  s_customerOperator1: string;
  d_customerFactor2: number;
  s_customerOperator2: string;
  s_customerMember: string;
  d_customerMemberRegisterDate: Date;
  d_customerMemberExpiredDate: Date;
  i_customerMemberPoint: number;
  i_customerMemberQtyFreeArticle: number;
  s_customerMemberFreePeriod: string;
  // byte[] b_customerMemberPictureFile;
  i_customerCreateID: number;
  d_customerCreateDate: Date
  i_customerDeleteID: number;
  d_customerDeleteDate: Date;
  i_customerUpdateID: number;
  d_customerUpdateDate: Date;
  s_customerActive: string;
  s_responsibilityCenterCode: string;
  s_responsibilityCenterRealCode: string;
  s_responsibilityCenterName: string;
  s_customerGroupCode: string;
  s_customerGroupRealCode: string;
  s_customerGroupName: string;
  i_religionID: number;
  s_religionName: string;
  s_maritalStatusCode: string;
  s_maritalStatusName: string;
  s_memberTypeCode: string;
  s_memberTypeRealCode: string;
  s_memberTypeName: string;
  s_customerAddress: string;

  constructor(s_customerCode: string, d_customerRegisterDate: Date, s_customerRealCode: string, s_customerTitle: string, s_customerName: string, s_customerGender: string, d_customerBirthDateDate: Date, s_customerBirthPlace: string, s_customerCompany: string, s_customerOccupation: string, s_customerCellPhone1: string, s_customerCellPhone2: string, s_customerCellPhone3: string, s_customerEmail1: string, s_customerEmail2: string, s_customerEmail3: string, s_customerSiup: string, s_customerTdp: string, s_customerNppkp: string, s_customerNpwp: string, s_customerSpecialInstruction: string, d_customerFactor1: number, s_customerOperator1: string, d_customerFactor2: number, s_customerOperator2: string, s_customerMember: string, d_customerMemberRegisterDate: Date, d_customerMemberExpiredDate: Date, i_customerMemberPoint: number, i_customerMemberQtyFreeArticle: number, s_customerMemberFreePeriod: string, i_customerCreateID: number, d_customerCreateDate: Date, i_customerDeleteID: number, d_customerDeleteDate: Date, i_customerUpdateID: number, d_customerUpdateDate: Date, s_customerActive: string, s_responsibilityCenterCode: string, s_responsibilityCenterRealCode: string, s_responsibilityCenterName: string, s_customerGroupCode: string, s_customerGroupRealCode: string, s_customerGroupName: string, i_religionID: number, s_religionName: string, s_maritalStatusCode: string, s_maritalStatusName: string, s_memberTypeCode: string, s_memberTypeRealCode: string, s_memberTypeName: string, s_customerAddress: string) {
    this.s_customerCode = s_customerCode;
    this.d_customerRegisterDate = d_customerRegisterDate;
    this.s_customerRealCode = s_customerRealCode;
    this.s_customerTitle = s_customerTitle;
    this.s_customerName = s_customerName;
    this.s_customerGender = s_customerGender;
    this.d_customerBirthDateDate = d_customerBirthDateDate;
    this.s_customerBirthPlace = s_customerBirthPlace;
    this.s_customerCompany = s_customerCompany;
    this.s_customerOccupation = s_customerOccupation;
    this.s_customerCellPhone1 = s_customerCellPhone1;
    this.s_customerCellPhone2 = s_customerCellPhone2;
    this.s_customerCellPhone3 = s_customerCellPhone3;
    this.s_customerEmail1 = s_customerEmail1;
    this.s_customerEmail2 = s_customerEmail2;
    this.s_customerEmail3 = s_customerEmail3;
    this.s_customerSiup = s_customerSiup;
    this.s_customerTdp = s_customerTdp;
    this.s_customerNppkp = s_customerNppkp;
    this.s_customerNpwp = s_customerNpwp;
    this.s_customerSpecialInstruction = s_customerSpecialInstruction;
    this.d_customerFactor1 = d_customerFactor1;
    this.s_customerOperator1 = s_customerOperator1;
    this.d_customerFactor2 = d_customerFactor2;
    this.s_customerOperator2 = s_customerOperator2;
    this.s_customerMember = s_customerMember;
    this.d_customerMemberRegisterDate = d_customerMemberRegisterDate;
    this.d_customerMemberExpiredDate = d_customerMemberExpiredDate;
    this.i_customerMemberPoint = i_customerMemberPoint;
    this.i_customerMemberQtyFreeArticle = i_customerMemberQtyFreeArticle;
    this.s_customerMemberFreePeriod = s_customerMemberFreePeriod;
    this.i_customerCreateID = i_customerCreateID;
    this.d_customerCreateDate = d_customerCreateDate;
    this.i_customerDeleteID = i_customerDeleteID;
    this.d_customerDeleteDate = d_customerDeleteDate;
    this.i_customerUpdateID = i_customerUpdateID;
    this.d_customerUpdateDate = d_customerUpdateDate;
    this.s_customerActive = s_customerActive;
    this.s_responsibilityCenterCode = s_responsibilityCenterCode;
    this.s_responsibilityCenterRealCode = s_responsibilityCenterRealCode;
    this.s_responsibilityCenterName = s_responsibilityCenterName;
    this.s_customerGroupCode = s_customerGroupCode;
    this.s_customerGroupRealCode = s_customerGroupRealCode;
    this.s_customerGroupName = s_customerGroupName;
    this.i_religionID = i_religionID;
    this.s_religionName = s_religionName;
    this.s_maritalStatusCode = s_maritalStatusCode;
    this.s_maritalStatusName = s_maritalStatusName;
    this.s_memberTypeCode = s_memberTypeCode;
    this.s_memberTypeRealCode = s_memberTypeRealCode;
    this.s_memberTypeName = s_memberTypeName;
    this.s_customerAddress = s_customerAddress;

  }
}