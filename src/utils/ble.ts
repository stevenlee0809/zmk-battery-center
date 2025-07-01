import { invoke } from "@tauri-apps/api/core";

/**
 * @typedef {Object} BleDeviceInfo
 * @property {string} name Device name
 * @property {string} id Device ID
 */
/** @export */
export type BleDeviceInfo = {
	name: string;
	id: string;
};

/**
 * @typedef {Object} BatteryInfo
 * @property {number|null} battery_level Battery level (0-100)
 * @property {string|null} user_descriptor User description
 */
/** @export */
export type BatteryInfo = {
	battery_level: number | null;
	user_descriptor: string | null;
};

/**
 * Get device list
 * @returns {Promise<BleDeviceInfo[]>}
 */
export async function listBatteryDevices(): Promise<BleDeviceInfo[]> {
	return await invoke("list_battery_devices");
}

/**
 * Get battery info for a specified device
 * @param {string} id Device ID
 * @returns {Promise<BatteryInfo[]>}
 */
export async function getBatteryInfo(id: string): Promise<BatteryInfo[]> {
	return await invoke("get_battery_info", { id });
}
