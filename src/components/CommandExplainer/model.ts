type Argument = {
  name: string;
  default?: string | number;
  description: string;
  required?: boolean;
};

type Group = {
  name: string;
  arguments: Array<Argument>;
};

type Command = {
  name: string;
  groups: Array<Group>;
};

class CommandBuilder {
  name: string;
  groups: Array<Group>;
  currentGroup?: Group;
  constructor() {
    this.name = "";
    this.groups = [];
  }

  setName(name: string): CommandBuilder {
    this.name = name;
    return this;
  }

  startGroup(name: string): CommandBuilder {
    const group = { name: name, arguments: [] };
    this.currentGroup = group;
    this.groups.push(group);
    return this;
  }

  argument(arg: Argument): CommandBuilder {
    this.currentGroup?.arguments.push(arg);
    return this;
  }

  build(): Command {
    return {
      name: this.name,
      groups: this.groups,
    };
  }
}

export type { Command, Group, Argument };
export { CommandBuilder };
