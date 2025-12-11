export {};

declare global {
  namespace Strapi {
    interface Env {
      <T = string | undefined>(key: string, defaultValue?: T): T;
      int(key: string, defaultValue?: number): number;
      bool(key: string, defaultValue?: boolean): boolean;
      array(key: string, defaultValue?: string[]): string[];
      float(key: string, defaultValue?: number): number;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      json(key: string, defaultValue?: any): any;
      date(key: string, defaultValue?: Date): Date;
      bigint(key: string, defaultValue?: bigint): bigint;
    }
  }
}
