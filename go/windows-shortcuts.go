package pkg

import (
	"github.com/go-ole/go-ole"
	"github.com/go-ole/go-ole/oleutil"
)

func CreateDesktopShortcut(exePath, shortcutName string) error {
	sh := &SystemHandler{}

	desktopPath := sh.Getenv("USERPROFILE") + "/Desktop/"
	return createShortcut(exePath, desktopPath+shortcutName+".lnk")
}

func CreateStartMenuShortcut(exePath, startMenuFolder, startMenuEntry string) error {
	sh := &SystemHandler{}

	startMenuPath := sh.Getenv("APPDATA") + "/Microsoft/Windows/Start Menu/Programs/"
	if err := sh.MkdirAll(startMenuPath + startMenuFolder + "/"); err != nil {
		return err
	}
	return createShortcut(exePath, startMenuPath+startMenuFolder+"/"+startMenuEntry+".lnk")
}

func createShortcut(exeTarget, desktopLink string) error {
	err := ole.CoInitializeEx(0, ole.COINIT_APARTMENTTHREADED|ole.COINIT_SPEED_OVER_MEMORY)
	if err != nil {
		return err
	}
	oleShellObject, err := oleutil.CreateObject("WScript.Shell")
	if err != nil {
		return err
	}
	defer oleShellObject.Release()
	wshell, err := oleShellObject.QueryInterface(ole.IID_IDispatch)
	if err != nil {
		return err
	}
	defer wshell.Release()
	cs, err := oleutil.CallMethod(wshell, "CreateShortcut", desktopLink)
	if err != nil {
		return err
	}
	idispatch := cs.ToIDispatch()
	oleutil.PutProperty(idispatch, "TargetPath", exeTarget)
	oleutil.CallMethod(idispatch, "Save")

	return nil
}
