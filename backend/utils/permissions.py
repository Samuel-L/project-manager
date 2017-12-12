from rest_framework import permissions


class IsOwner(permissions.BasePermission):
    """
    Custom permission that only allows owner to edit and view tasks
    """
    def has_permission(self, request, view):
        if request.user.is_anonymous:
            return False
        return request.user and request.user.is_authenticated()

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user
