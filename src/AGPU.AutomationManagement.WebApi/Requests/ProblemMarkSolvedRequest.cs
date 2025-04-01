namespace AGPU.AutomationManagement.WebApi.Requests;

// TODO: Receive as `DateTimeOffset` on backend and from frontend pass dateTime as ISO string.
public record ProblemMarkSolvedRequest(
    string SolvingDate,
    string SolvingTime);