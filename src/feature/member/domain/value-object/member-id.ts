import { IdGenerator } from '@/common/id-generator/id-generator';

export type MemberId = bigint & { _brand: 'MemberId' }

export namespace MemberId {

  export const from = (value: bigint | string): MemberId => {
    return (
      typeof value === 'string'
        ? BigInt(value)
        : value
    ) as MemberId;
  };


  export const nextId = (): MemberId => (
    IdGenerator.nextId() as MemberId
  );

}

