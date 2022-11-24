export class DeclarationRequest {
  userId: string;
  doctorId: string;
  consultantId?: string;
  status: string;
  medData: string;
  comment?: string;

  doctorName?: string;
  userName?: string;
  medInst?: string;
}
