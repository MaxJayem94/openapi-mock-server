Erstelle ein neues openapi file im yaml Format mit dem Titel "Tribe Rest Api"
- Es Gibt Endpunkte für die Ressourcen TribeMember und Projekte
- Das sind exemplarische ts interfaces

interface TribeProject {
  name: string,
  startDate: Date,
  endDate: Date,
  budget: number,
  customer: string;
}

enum Role {
  FRONTEND,
  BACKEND,
  NAVIGATOR,
}

interface TribeMember {
  firstName: string
  lastName: string
  project?: TribeProject
  roles: Array<Role>
  hobbies: Array<string>;
  skills: Array<string>
}


- Erstelle für Tribemember get (eine paginiert, sortierbar und searchTerm), ein Post zur erstellung, ein Patch zum updaten, ein delete zum löschen, und einen Getbyid
-  der Searchterm geht auf den Namen und das Projekt des TribeMembers
- Erstelle für TribeProjekte ebenfalls eine sortierbare liste mit paginierung und searchTerm

- Achte auf required properties,
- Gruppiere die Endpunkte mit Hilfe von Tags
- Lager auch query parameter in den components aus, sodass für die paginierung der unterschiedlichen endpunkte auf die selben items verwiesen werden kann
- nutze components im yaml file, auf die in den routen referenzierst
- achte darauf, dass bei delete, getById und Patch jeweils die id im path des endpunkts ist.


Füge auch examples bei jedem Endpunkt hinzu 


-- Wer macht examples im openapi yaml?
-- Wer nutzt regelmäßig Openapi Spezifikationen?
-- Wer erstellt regelmäßig Openapi Spezifikationen?
-- Wer lässt Open Api Spezifikationen generieren? 
-- Wer generiert Code mit Hilfe von Open Api Spezifikationen?
-- Wer hat schonmal einen Mockserver auf Grundlage einer Openapi spezifikation betrieben?


Einer der häufigsten Fehler, wenn nicht der häufigste überhaupt, sind properties- und Methodenzugriffe die in undefined laufen.

