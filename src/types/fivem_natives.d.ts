// fiveM-natives.d.ts (or in a global declaration file)
declare function GetNumResources(): number;
declare function GetResourceByFindIndex(index: number): string;
declare function GetResourceMetadata(
	resourceName: string,
	metadataKey: string,
	index: number
): string | null;
