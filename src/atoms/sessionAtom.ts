import { atom } from 'jotai';

interface SessionType {
    email: string,
    password: string,
    active: boolean,
}

export const sessionAtomDefault = {
    email: '',
    password: '',
    active: false,
};

export const sessionAtom = atom<SessionType>(sessionAtomDefault);

export const formFieldsSession = atom((get) => get(sessionAtom), (get, set, update: SessionType) => set(sessionAtom, {...get(sessionAtom), ...update}))
