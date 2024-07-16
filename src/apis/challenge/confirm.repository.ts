
export type ConfirmStatus = "SUCCESS" | "FAIL" | "BEFORE_CONFIRM";
export interface Confirm {
  id: number;
  status: ConfirmStatus;
  updatedAt?: number;
  imageUrl?: string;
}


class ConfirmRepository {
  private data: Confirm[];

  constructor(size: number) {
    this.data = new Array(size).fill(0).map((_, idx) => ({
      id: idx + 1,
      updatedAt: undefined,
      imageUrl: undefined,
      status: 'BEFORE_CONFIRM'
    }))
  }
  
  getList ({ status }: { status?: ConfirmStatus } = {}) {
    if(status) {
      return this.data.filter(x => x.status === status);
    }
    
    return this.data;
  }

  getById(id: number) {
    const item = this.data.find(x => x.id === id);
    if(!item) {
      throw new Error()
    }

    return item;
  }

  updateById (id: number, payload: Partial<Omit<Confirm, 'id' | 'updatedAt'>>) {
    this.data = this.data.map(x => {
      if(x.id === id) {
        return {
          ...x,
          ...payload,
          updatedAt: Date.now()
        }
      }

      return x;
    })
  }
}

export default ConfirmRepository;