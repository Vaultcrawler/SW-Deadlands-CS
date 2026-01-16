import { createContext, useState, useEffect } from 'react';

export const CharacterContext = createContext();

const STORAGE_KEY = 'deadlands_character';

const DEFAULT_CHARACTER = {
	name: 'Morty McFly',
	nickname: 'Morty',
	bennies: 3,
	conviction: '',
	height: 6,
	weight: 120,
	biography: '',
	appearance: '',
	backstory: '',
	attributes: {
		agility: { name: 'Agility', level: 2, die: 'd6' },
		smarts: { name: 'Smarts', level: 2, die: 'd6' },
		spirit: { name: 'Spirit', level: 2, die: 'd6' },
		strength: { name: 'Strength', level: 2, die: 'd6' },
		vigor: { name: 'Vigor', level: 2, die: 'd6' },
	},
	skills: [
		{ id: 0, name: 'Athletics', attribute: 'Strength', level: 0 },
		{ id: 1, name: 'Common Knowledge', attribute: 'Smarts', level: 0 },
		{ id: 2, name: 'Notice', attribute: 'Smarts', level: 0 },
		{ id: 3, name: 'Persuasion', attribute: 'Spirit', level: 0 },
		{ id: 4, name: 'Stealth', attribute: 'Agility', level: 0 },
		{ id: 5, name: 'Occultism', attribute: 'Smarts', level: 0 },
		{ id: 6, name: 'Weird Science', attribute: 'Smarts', level: 0 },
	],
	gear: [],
	edges: [
		{ id: 0, name: 'Ace', description: 'Expert with vehicles' },
	],
	hindrances: [
		{ id: 0, name: 'Curious', description: 'Often investigates mysteries', major: false },
	],
	powers: [
		{ id: 0, name: 'Arcane Power', points: 1, description: 'Access to magical abilities' },
	],
	weapons: [
		{ id: 0, name: 'Six-Shooter', damage: '2d6', range: '12/24/48', type: 'Pistol' },
	],
	derivedStats: {
		pace: 6,
		parry: 2,
		toughness: 5,
		armor: 0,
	},
};

const getInitialCharacter = () => {
	if (typeof window !== 'undefined' && localStorage) {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				return JSON.parse(saved);
			}
		} catch (error) {
			console.error('Error loading character from localStorage:', error);
		}
	}
	return DEFAULT_CHARACTER;
};

export function CharacterProvider({ children }) {
	const [character, setCharacter] = useState(getInitialCharacter());

	// Speichern zum localStorage, wenn sich character ändert
	useEffect(() => {
		if (typeof window !== 'undefined' && localStorage) {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
			} catch (error) {
				console.error('Error saving character to localStorage:', error);
			}
		}
	}, [character]);

	const updateAttribute = (attrKey, newLevel) => {
		setCharacter((prev) => ({
			...prev,
			attributes: {
				...prev.attributes,
				[attrKey]: {
					...prev.attributes[attrKey],
					level: newLevel,
				},
			},
		}));
	};

	const updateSkill = (skillId, newLevel) => {
		setCharacter((prev) => ({
			...prev,
			skills: prev.skills.map((skill) =>
				skill.id === skillId ? { ...skill, level: newLevel } : skill
			),
		}));
	};

	const updateCharacterInfo = (field, value) => {
		setCharacter((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const addGearItem = (item) => {
		setCharacter((prev) => ({
			...prev,
			gear: [...prev.gear, { ...item, id: Date.now() }],
		}));
	};

	const removeGearItem = (itemId) => {
		setCharacter((prev) => ({
			...prev,
			gear: prev.gear.filter((item) => item.id !== itemId),
		}));
	};

	const addEdge = (edge) => {
		setCharacter((prev) => ({
			...prev,
			edges: [...prev.edges, { ...edge, id: Date.now() }],
		}));
	};

	const removeEdge = (edgeId) => {
		setCharacter((prev) => ({
			...prev,
			edges: prev.edges.filter((edge) => edge.id !== edgeId),
		}));
	};

	const addHindrance = (hindrance) => {
		setCharacter((prev) => ({
			...prev,
			hindrances: [...prev.hindrances, { ...hindrance, id: Date.now() }],
		}));
	};

	const removeHindrance = (hindranceId) => {
		setCharacter((prev) => ({
			...prev,
			hindrances: prev.hindrances.filter((h) => h.id !== hindranceId),
		}));
	};

	const addPower = (power) => {
		setCharacter((prev) => ({
			...prev,
			powers: [...prev.powers, { ...power, id: Date.now() }],
		}));
	};

	const removePower = (powerId) => {
		setCharacter((prev) => ({
			...prev,
			powers: prev.powers.filter((power) => power.id !== powerId),
		}));
	};

	const addWeapon = (weapon) => {
		setCharacter((prev) => ({
			...prev,
			weapons: [...prev.weapons, { ...weapon, id: Date.now() }],
		}));
	};

	const removeWeapon = (weaponId) => {
		setCharacter((prev) => ({
			...prev,
			weapons: prev.weapons.filter((weapon) => weapon.id !== weaponId),
		}));
	};

	const resetCharacter = () => {
		setCharacter(DEFAULT_CHARACTER);
		if (typeof window !== 'undefined' && localStorage) {
			localStorage.removeItem(STORAGE_KEY);
		}
	};

	const exportCharacter = () => {
		return JSON.stringify(character, null, 2);
	};

	const importCharacter = (jsonString) => {
		try {
			const imported = JSON.parse(jsonString);
			setCharacter(imported);
			return true;
		} catch (error) {
			console.error('Error importing character:', error);
			return false;
		}
	};

	const value = {
		character,
		updateAttribute,
		updateSkill,
		updateCharacterInfo,
		addGearItem,
		removeGearItem,
		addEdge,
		removeEdge,
		addHindrance,
		removeHindrance,
		addPower,
		removePower,
		addWeapon,
		removeWeapon,
		resetCharacter,
		exportCharacter,
		importCharacter,
	};

	return (
		<CharacterContext.Provider value={value}>
			{children}
		</CharacterContext.Provider>
	);
}
