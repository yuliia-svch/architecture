export class DeclarationRequest {
  userId?: string;
  doctorId: number;
  consultantId?: string;
  status: string;
  medData: string;
  comment?: string;

  doctorName?: string;
  consultantName?: string;
  medInst?: string;
}
